import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        try {
          const { username, password, role } = credentials
          const response = await fetch('http://localhost:3000/api/login/login-form', {
            method: 'POST',
            body: JSON.stringify({ username, password, role}),
            headers: {
              'Content-type': 'application/json'
            },
  
          });
          if(!response.ok){
            throw new Error('Password Or Email is not Correct')
            
          }
          let user = await response.json()
  
          if (response.ok && user) {
            return user;
          } else return null;
        } catch (error) {
          console.log(error.message)
          return;
        }
       

      },
    }),


  ],

  callbacks: {
    async jwt({ token, user }) {
        return { ...token, ...user };
    },
    async session({ session, token, user }) {
        // Send properties to the client, like an access_token from a provider.
        session.user = token;
        return session;
    },
},
  jwt: {
    secret: 'SECRET_HERE',
    encryption: true,
  },
  pages:{
      signIn: "../../login"
    }
};

export default NextAuth(authOptions)