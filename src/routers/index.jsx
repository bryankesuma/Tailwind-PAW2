import { createBrowserRouter } from "react-router";
import PublicLayout from "../layout/PublicLayout";


const router = createBrowserRouter([
    {
        path: "/",
        Component: PublicLayout,
        children: [
            {
                index: true,
                lazy: async () => {
                    const module = await import("../home/home")

                    return {
                        Component: module.default
                    }
                }
            },
            {
                path: "/about",
                lazy: async () => {
                    const module = await import("../about/about")

                    return {
                        Component: module.default
                    }
                }
            },
            {
                path: "/register",
                lazy: async () => {
                    const module = await import("../register/register")

                    return {
                        Component: module.default
                    }
                }
            }
        ]
    },
])

export default router