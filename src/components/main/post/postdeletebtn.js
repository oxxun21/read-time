"use client";
import React, { useState } from "react";
import s from "./postview.module.css";
import trash_icon from "@/assets/trash_icon.png";
import Modal from "@/components/modal/modal";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PostDeleteBtn({ post }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deletePost, setDeletePost] = useState();
  const [isSubmit, setIsSubmit] = useState(false);

  const router = useRouter();
  const openModal = (postId) => {
    setDeletePost(postId);
    setIsModalOpen((prev) => !prev);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = async (postId) => {
    if (isSubmit) return;

    setIsSubmit(true);
    try {
      const response = await fetch(`/api/postdelete/${postId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        router.refresh();
      } else {
        console.error("게시물 삭제 실패");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmit(false);
    }
    setIsModalOpen(false);
  };

  return (
    <>
      <button type="button" onClick={() => openModal(post._id)}>
        <Image src={trash_icon} alt="게시글 삭제" width={20} height={20} />
      </button>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <p>게시글을 삭제하시겠습니까?</p>
          <div className={s.modalBtnDiv}>
            <button type="button" onClick={closeModal}>
              남겨둘래요
            </button>
            <button type="button" onClick={() => handleDelete(deletePost)}>
              삭제할래요
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
