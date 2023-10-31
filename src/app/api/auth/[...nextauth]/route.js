import { connectDatabase } from "@/lib/helpers/db-util";
import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";

export const authOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log(user);
      console.log(process.env.NEXTAUTH_SECRET);
      console.log(process.env.DATABASE_URL);
      const client = await connectDatabase();
      const db = client.db();
      const usersCollection = db.collection("users");
      const existingUser = await usersCollection.findOne({ id: user.id });
      if (!existingUser) {
        await usersCollection.insertOne(user);
      }
      client.close();
      return true;
    },
    session: ({ session, token }) => ({
      ...session,
      id: token.sub,
    }),
  },
  secret: process.env.NEXTAUTH_SECRET,
  database: process.env.DATABASE_URL,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
