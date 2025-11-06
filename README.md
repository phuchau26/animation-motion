# React Food Showcase

Một ứng dụng React trực quan để hiển thị các món ăn với hiệu ứng animation sống động.

Ứng dụng sử dụng React, Framer Motion cho animation và Tailwind CSS cho styling.

## 🌟 Tính năng

-   Hiển thị danh sách món ăn dưới dạng thẻ (FoodCard) với hover scale nhẹ.
-   **MainStage**:
    -   Hiển thị món ăn đang chọn.
    -   Khi chọn món mới:
        -   Ảnh chuyển động mượt từ món cũ sang món mới.
        -   Background thay đổi màu nhẹ nhàng nổi bật.
    -   Sử dụng animation `spring` hoặc `tween` để mượt mà.
-   Màu background mỗi món ăn được tùy chỉnh nhẹ nhàng để món nổi bật mà không gây chói mắt.
-   Responsive và dễ mở rộng thêm món ăn.

## 🛠 Công nghệ sử dụng

-   **React** – thư viện UI
-   **Framer Motion** – animation động
-   **Tailwind CSS** – styling tiện lợi, nhanh gọn

## ⚡ Cài đặt và chạy

1.  **Clone repository:**

    ```bash
    git clone [https://github.com/username/react-food-showcase.git](https://github.com/username/react-food-showcase.git)
    cd react-food-showcase
    ```

2.  **Cài đặt dependencies:**

    ```bash
    npm install
    ```

3.  **Chạy app:**

    ```bash
    npm run dev
    ```

4.  **Mở trình duyệt tại:**

    `http://localhost:5173`


## 🎨 Màu sắc món ăn (background pastel)

| Món ăn | Màu nền |
| :--- | :--- |
| Hu Tieu | `#A7F3D0` |
| Bun Rieu | `#FECACA` |
| Pho | `#BFDBFE` |
| Banh Canh| `#FEF3C7` |

## 🔧 Cấu hình Tailwind

1.  **Cài Tailwind:**

    ```bash
    npm install -D tailwindcss postcss autoprefixer
    ```

2.  **Khởi tạo file config:**

    ```bash
    npx tailwindcss init -p
    ```

3.  **Cấu hình `tailwind.config.js`:**

    ```javascript
    module.exports = {
      content: ["./index.html", "./src/**/*.{js,jsx}"],
      theme: { extend: {} },
      plugins: [],
    }
    ```

4.  **Thêm Tailwind vào file CSS chính (ví dụ: `src/index.css`):**

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

## 📌 Notes

-   Có thể mở rộng thêm nhiều món ăn bằng cách thêm vào mảng `foods` trong `App.jsx`.
-   Hiệu ứng animation, scale, rotate, và background có thể tuỳ chỉnh bằng props và Framer Motion.
-   Responsive: có thể thêm Tailwind `sm:`, `md:` class để tối ưu cho màn hình nhỏ.