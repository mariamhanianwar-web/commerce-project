import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const res = await fetch(
          "https://ecommerce.routemisr.com/api/v1/auth/signin",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
          }
        );
        const data = await res.json();
        if (res.ok && data.token) {
          return {
            id: data.user._id,
            email: data.user.email,
            token: data.token, 
          };}
        return null;
      },
    }),],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token; 
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },},
  secret: process.env.NEXTAUTH_SECRET,
});
export { handler as GET, handler as POST };