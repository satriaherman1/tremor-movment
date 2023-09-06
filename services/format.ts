// import dayjs from "dayjs";
// import "dayjs/locale/id"; // Mengimpor bahasa Indonesia untuk dayjs

// dayjs.locale("id"); // Mengatur bahasa dayjs menjadi Indonesia

class FormatService {
  // formatDate(date: any) {
  //   return dayjs(date).format("DD MMMM YYYY");
  // }

  truncateText(text: string, maxLen: number) {
    if (text.length > maxLen) {
      const result = text.slice(0, maxLen);
      return result + "...";
    } else {
      return text;
    }
  }
}

export default FormatService;
