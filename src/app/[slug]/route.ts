import {redirect} from "next/navigation";
import { links } from "@/Indexes";

function findOriginByKey(key: string): string | undefined {
    const data = links;
    const item = data.find(item => item.k === key);
    return item?.origin;
}

export async function GET(request: Request,
                          {params}: {params: {slug: string}}): Promise<Response> {
    const origin = findOriginByKey(params.slug);
    if (!origin) {
        return new Response("Not available", {status: 404});
    }
    redirect(origin + "/?ref=kirbee.tech");
}