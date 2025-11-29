import { useEffect, useState } from "react";

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // マウント時に犬種一覧を取得
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://dog.ceo/api/breeds/list/all");
        if (!res.ok) throw new Error("犬種一覧取得失敗");
        const data = await res.json();
        const breedList = Object.keys(data.message || {});
        setBreeds(breedList);
      } catch (err) {
        console.error(err);
        setBreeds([]);
      }
    })();
  }, []);

  const handleShowImages = async () => {
    let breedToFetch = selectedBreed;

    // 未選択なら先頭犬種をセット
    if (!breedToFetch) {
      if (breeds.length === 0) {
        setError("犬種一覧が取得できていません");
        return;
      }
      breedToFetch = breeds[0];
      setSelectedBreed(breedToFetch);
    }

    setError("");
    setLoading(true);
    setImages([]);

    try {
      // 複数画像をまとめて取得（最大12件）
      const res = await fetch(
        `https://dog.ceo/api/breed/${breedToFetch}/images/random/12`
      );
      if (!res.ok) throw new Error("画像取得失敗");
      const data = await res.json();
      const allImages = data.message || [];

      setImages(allImages);
    } catch (err) {
      console.error(err);
      setError("画像の取得に失敗しました");
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>犬種一覧</h2>

      {/* ドロップダウン */}
      <select
        value={selectedBreed}
        onChange={(e) => setSelectedBreed(e.target.value)}
      >
        <option value="">-- 犬種を選択 --</option>
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>

      {/* 表示ボタン */}
      <button onClick={handleShowImages} style={{ marginLeft: 12 }}>
        表示
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading && <p>画像取得中...</p>}

      {/* 画像リスト */}
      <div style={{ marginTop: 12 }}>
        {images.length > 0 && (
          <ul style={{ display: "flex", flexWrap: "wrap", gap: 12, padding: 0 }}>
            {images.map((url, idx) => (
              <li key={url + idx} style={{ listStyle: "none" }}>
                <img src={url} alt={selectedBreed} style={{ width: 150 }} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
