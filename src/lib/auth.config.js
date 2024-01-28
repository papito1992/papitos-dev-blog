export const authConfig = {
    strategy: "jwt",
    pages: {
        signIn: "/login",
    },
    providers: [],
    callbacks: {
        // FOR MORE DETAIL ABOUT CALLBACK FUNCTIONS CHECK https://next-auth.js.org/configuration/callbacks
        async jwt({token, user, account}) {
            if (user) {
                token.id = user.id;
                token.isAdmin = user?.isAdmin;
            }
            return token;
        },
        async session({session, token, account, user}) {
            if (token) {
                session.user.id = user.id;
                session.user.isAdmin = user?.isAdmin;
            }
            return session;
        },
        authorized({auth, request}) {
            const user = auth?.user;
            const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
            const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
            const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
            // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD

            if (isOnAdminPanel && !user?.isAdmin) {
                return false;
            }

            // ONLY AUTHENTICATED USERS CAN REACH THE BLOG PAGE

            // if (isOnBlogPage && !user) {
            //     return false;
            // }

            // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE

            if (isOnLoginPage && user) {
                return Response.redirect(new URL("/", request.nextUrl));
            }

            return true
        },
    },
};