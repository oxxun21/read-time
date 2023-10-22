import { connectDatabase } from "@/lib/helpers/db-util";
import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";

const handler = NextAuth({
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      const client = await connectDatabase();
      const db = client.db();
      const usersCollection = db.collection("users");
      const existingUser = await usersCollection.findOne({ email: user.email });
      if (!existingUser) {
        await usersCollection.insertOne(user);
      }
      client.close();
      return true;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  database: process.env.DATABASE_URL,
});

export { handler as GET, handler as POST };
