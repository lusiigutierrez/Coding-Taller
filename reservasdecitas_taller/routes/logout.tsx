import { Handlers } from "$fresh/server.ts";


export const handler: Handlers = {
    GET() {
      const headers = new Headers();
      headers.set("Set-Cookie", "adminSession=; Max-Age=0; Path=/;");
      return new Response("", { status: 303, headers: { Location: "/" } });
    },
  };
  