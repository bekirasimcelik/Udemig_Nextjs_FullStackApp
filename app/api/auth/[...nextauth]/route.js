import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/providers/google";
import { connectToDB } from "@utils/databse";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientScret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {},
  async signIn({ profile }) {
    try {
      // serverless -> lambda
      await connectToDB();

      // check if a user already exist

      // if not, create a new user

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
});

export { handler as GET, handler as POST };
