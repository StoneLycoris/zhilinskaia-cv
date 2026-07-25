import resumeEn from "@/assets/resume/Zhilinskaia Elena Frontend Vue TypeScript CV.pdf";
import resumeRu from "@/assets/resume/Жилинская Е.А. frontend Vue TypeScript резюме.pdf";
import type { ResumeFile, ResumeLocale } from "@/types/resume";

export const resumes: Record<ResumeLocale, ResumeFile> = {
  ru: {
    file: resumeRu,
    download: "Елена_Жилинская_Резюме.pdf",
  },

  en: {
    file: resumeEn,
    download: "Elena_Zhilinskaia_Resume.pdf",
  },
};
