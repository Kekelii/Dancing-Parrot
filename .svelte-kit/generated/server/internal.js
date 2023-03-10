
import root from '../root.svelte';
import { set_building, set_paths, set_private_env, set_public_env, set_version } from '../../../node_modules/@sveltejs/kit/src/runtime/shared.js';

set_paths({"base":"","assets":""});
set_version("1678229607440");

export const options = {
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	hooks: null, // added lazily, via `get_hooks`
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"utf-8\" />\n    <link rel=\"icon\" href=\"logo/logo.png\" />\n    <meta name=\"viewport\" content=\"width=device-width , initial-scale=1\" /> " + head + "\n    <title>The Kasa Podcast</title>\n\n    <!-- open graph protocal -->\n    <meta property=\"og:title\" content=\"The Kasa Podcast\" />\n    <meta property=\"og:description\" content=\"where The Tribe comes together to discuss social issues and explore the issues that matter most to our community\" />\n    <meta property=\"og:type\" content=\"website\">\n    <meta property=\"og:url\" content=\"https://kasapodcast.com/\" />\n    <meta property=\"og:image\" content=\"https://kasapodcast.com/logo/logo.png\" />\n\n    <!-- gsap cdn -->\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js\"></script>\n\n</head>\n<style>\n    @font-face {\n        font-family: 'Bison';\n        src: url(/fonts/Bison-Bold\\(PersonalUse\\).ttf);\n    }\n</style>\n\n<body data-sveltekit-preload-data=\"hover\">\n    <div style=\"display: contents\">" + body + "</div>\n</body>\n\n</html>",
		error: ({ status, message }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n\t\t\t\t\tUbuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid #ccc;\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	}
};

export function get_hooks() {
	return {};
}

export { set_building, set_paths, set_private_env, set_public_env };
