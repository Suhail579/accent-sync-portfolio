<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Keep portfolio content on the index route with in-page anchors because this is explicitly a single scrolling page.
- Import uploaded portrait through the asset pointer so media is served by the managed asset system.
- Keep visual tokens and animation definitions in the global stylesheet so both themes share the same design system.
