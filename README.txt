# App Quản Lý Thiết Bị

 **** BRANCH : upnew ****

## Giới Thiệu
Ứng dụng quản lý thiết bị được xây dựng sử dụng React Native và Firebase. Ngoài quản lý thiết bị, ứng dụng còn quản lý nhân viên và phòng ban. Mỗi nhân viên chỉ có thể xem và quản lý các thiết bị thuộc phòng ban mà họ được phân công.

## Tính Năng
 ADMIN:
- Duyệt tài khoản user.
- Thêm, sửa, xóa thông tin thiết bị.
- Thêm phòng ban, người dùng (user) vào phòng ban.
- Hiển thị danh sách phòng ban, hiển thị danh sách user và thiết bị trong từng phòng ban.
- Theo dõi tình trạng hoạt động của từng thiết bị.
- Nhận thông báo khi thiết bị gặp sự cố.
- Tìm kiếm thông tin phòng ban, thiết bị và user.
- Lưu trữ và quản lý dữ liệu thiết bị bằng Firebase.
- Quản lý nhân viên, phòng ban.
- Phân quyền cho nhân viên để họ chỉ có thể xem được thiết bị của phòng ban mình.

USER:
- Xem thông tin của các thiết bị trong phòng ban mà user được thêm vào.
- Tìm kiếm thông tin  thiết bị trong phòng ban.
- Báo cáo tình trạng thiết bị trong phòng ban.
- Chỉnh sửa thông tin user
## Yêu Cầu Hệ Thống
- Node.js v12 trở lên
- React Native v0.63 trở lên
- Firebase account

## Cài Đặt

### 1. Clone repository 
```
git clone https://github.com/hiepproso01/DeviceManagementApp.git
cd DeviceManagementApp
```

### 2. Cài đặt các phụ thuộc
```
npm install
```

### 3. Thiết lập Firebase
- Tạo một project trên Firebase.
- Cấu hình Firebase bằng cách thêm tệp cấu hình `google-services.json` (cho Android) và `GoogleService-Info.plist` (cho iOS) vào các thư mục tương ứng.

### 4. Chạy ứng dụng
```
npx react-native run-android
```
Hoặc:
```
npx react-native run-ios
```
Hoặc:
```
npm start


## Sử Dụng
- Đăng nhập bằng tài khoản Firebase.
- Thêm thiết bị và phân quyền quản lý cho nhân viên theo phòng ban.
- Quản lý thiết bị từ màn hình chính, bao gồm xem chi tiết, chỉnh sửa, và xóa thiết bị.

