import { updateCategoryNames } from "@/actions/admin";

export default function CategoryNameForm({
  id,
  nameEn,
  namePt,
}: {
  id: number;
  nameEn: string;
  namePt: string;
}) {
  return (
    <form action={updateCategoryNames} className="category-head">
      <input type="hidden" name="id" value={id} />
      <h3 style={{ fontSize: 20 }}>{nameEn}</h3>
      <input type="text" name="nameEn" defaultValue={nameEn} className="admin-field" placeholder="Name (EN)" />
      <input type="text" name="namePt" defaultValue={namePt} className="admin-field" placeholder="Name (PT)" />
      <button type="submit" className="btn btn-ghost btn-sm">
        Save name
      </button>
    </form>
  );
}
