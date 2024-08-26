import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/providers/google";

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
    } catch (error) {
      console.log(error);
    }
  },
});

export { handler as GET, handler as POST };
