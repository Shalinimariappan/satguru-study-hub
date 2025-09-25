import { useParams, useNavigate } from "react-router-dom";
import { X } from "lucide-react"; // ❌ close/back icon
const notesResources: Record<string, { title: string; url: string }[]> = {
  "6th-Std-Question-Papers": [
  // 1ST MID TERM
  { title: "6th First Midterm English", url: "/pdfs/6TH/1ST MID TERM/6th First Midterm English question paper.pdf" },
  { title: "6th First Midterm Maths", url: "/pdfs/6TH/1ST MID TERM/6th First Midterm Maths question paper.pdf" },
  { title: "6th First Midterm Science", url: "/pdfs/6TH/1ST MID TERM/6th First Midterm Science question paper.pdf" },
  { title: "6th First Midterm Social", url: "/pdfs/6TH/1ST MID TERM/6th First Midterm Social question paper.pdf" },
  { title: "6th First Midterm Tamil", url: "/pdfs/6TH/1ST MID TERM/6th First Midterm Tamil question paper.pdf" },

  // 1ST TERM
  { title: "6th First Term English", url: "/pdfs/6TH/1ST TERM/6th First Term English question paper.pdf" },
  { title: "6th First Term Maths", url: "/pdfs/6TH/1ST TERM/6th First Term Maths question paper.pdf" },
  { title: "6th First Term Science", url: "/pdfs/6TH/1ST TERM/6th First Term Science question paper.pdf" },
  { title: "6th First Term Social", url: "/pdfs/6TH/1ST TERM/6th First Term Social question paper.pdf" },
  { title: "6th First Term Tamil", url: "/pdfs/6TH/1ST TERM/6th First Term Tamil question paper.pdf" },

  // 2ND MID TERM
  { title: "6th Second Midterm English", url: "/pdfs/6TH/2ND MID TERM/6th Second Midterm English question paper.pdf" },
  { title: "6th Second Midterm Maths", url: "/pdfs/6TH/2ND MID TERM/6th Second Midterm Maths question paper.pdf" },
  { title: "6th Second Midterm Science", url: "/pdfs/6TH/2ND MID TERM/6th Second Midterm Science question paper.pdf" },
  { title: "6th Second Midterm Social", url: "/pdfs/6TH/2ND MID TERM/6th Second Midterm Social question paper.pdf" },
  { title: "6th Second Midterm Tamil", url: "/pdfs/6TH/2ND MID TERM/6th Second Midterm Tamil question paper.pdf" },

  // 2ND TERM
  { title: "6th Second Term English", url: "/pdfs/6TH/2ND TERM/6th Second Assessment English question paper.pdf" },
  { title: "6th Second Term Maths", url: "/pdfs/6TH/2ND TERM/6th Second Assessment Maths question paper.pdf" },
  { title: "6th Second Term Science", url: "/pdfs/6TH/2ND TERM/6th Second Assessment Science question paper.pdf" },
  { title: "6th Second Term Social", url: "/pdfs/6TH/2ND TERM/6th Second Assessment Social question paper.pdf" },
  { title: "6th Second Term Tamil", url: "/pdfs/6TH/2ND TERM/6th Second Assessment Tamil question paper.pdf" },

  // 3RD MID TERM
  { title: "6th Third Midterm English", url: "/pdfs/6TH/3RD MID TERM/6th Third Midterm English question paper.pdf" },
  { title: "6th Third Midterm Maths", url: "/pdfs/6TH/3RD MID TERM/6th Third Midterm Maths question paper.pdf" },
  { title: "6th Third Midterm Science", url: "/pdfs/6TH/3RD MID TERM/6th Third Midterm Science question paper.pdf" },
  { title: "6th Third Midterm Social", url: "/pdfs/6TH/3RD MID TERM/6th Third Midterm Social question paper.pdf" },
  { title: "6th Third Midterm Tamil", url: "/pdfs/6TH/3RD MID TERM/6th Third Midterm Tamil question paper.pdf" },

  // 3RD TERM
  { title: "6th Third Term English", url: "/pdfs/6TH/3RD TERM/6th ENGLISH Third Term Question Paper.pdf" },
  { title: "6th Third Term Maths", url: "/pdfs/6TH/3RD TERM/6th MATHS Third Term Question Paper.pdf" },
  { title: "6th Third Term Science", url: "/pdfs/6TH/3RD TERM/6th SCIENCE Third Term Question Paper.pdf" },
  { title: "6th Third Term Social", url: "/pdfs/6TH/3RD TERM/6th Social Third Term Question Paper.pdf" },
  { title: "6th Third Term Tamil", url: "/pdfs/6TH/3RD TERM/6th தமிழ் Third Term Question Paper.pdf" },
],

"7th-Std-Question-Papers": [
  // 1ST MID TERM
  { title: "7th First Midterm English", url: "/pdfs/7TH/1ST MID TERM/7th First Midterm English question paper.pdf" },
  { title: "7th First Midterm Maths", url: "/pdfs/7TH/1ST MID TERM/7th First Midterm MATHS question paper.pdf" },
  { title: "7th First Midterm Science", url: "/pdfs/7TH/1ST MID TERM/7th First Midterm SCIENCE question paper.pdf" },
  { title: "7th First Midterm Social", url: "/pdfs/7TH/1ST MID TERM/7th First Midterm SOCIAL question paper.pdf" },
  { title: "7th First Midterm Tamil", url: "/pdfs/7TH/1ST MID TERM/7th First Midterm TAMIL question paper.pdf" },

  // 1ST TERM
  { title: "7th First Term English", url: "/pdfs/7TH/1ST TERM/7th First Assessment ENGLISH question paper.pdf" },
  { title: "7th First Term Maths", url: "/pdfs/7TH/1ST TERM/7th First Assessment MATHS question paper.pdf" },
  { title: "7th First Term Science", url: "/pdfs/7TH/1ST TERM/7th First Assessment SCIENCE question paper.pdf" },
  { title: "7th First Term Social", url: "/pdfs/7TH/1ST TERM/7th First Assessment SOCIAL question paper.pdf" },
  { title: "7th First Term Tamil", url: "/pdfs/7TH/1ST TERM/7th First Assessment TAMIL question paper.pdf" },

  // 2ND MID TERM
  { title: "7th Second Midterm English", url: "/pdfs/7TH/2ND MID TERM/7th Second Mid term ENGLISH question paper.pdf" },
  { title: "7th Second Midterm Maths", url: "/pdfs/7TH/2ND MID TERM/7th Second Mid term MATHS question paper.pdf" },
  { title: "7th Second Midterm Science", url: "/pdfs/7TH/2ND MID TERM/7th Second Mid term SCIENCE question paper.pdf" },
  { title: "7th Second Midterm Social", url: "/pdfs/7TH/2ND MID TERM/7th Second Mid term SOCIAL question paper.pdf" },
  { title: "7th Second Midterm Tamil", url: "/pdfs/7TH/2ND MID TERM/7th Second Mid term TAMIL question paper.pdf" },

  // 2ND TERM
  { title: "7th Second Term English", url: "/pdfs/7TH/2ND TERM/7th Second Assessment ENGLISH question paper.pdf" },
  { title: "7th Second Term Maths", url: "/pdfs/7TH/2ND TERM/7th Second Assessment MATHS question paper.pdf" },
  { title: "7th Second Term Science", url: "/pdfs/7TH/2ND TERM/7th Second Assessment SCIENCE question paper.pdf" },
  { title: "7th Second Term Social", url: "/pdfs/7TH/2ND TERM/7th Second Assessment SOCIAL question paper.pdf" },
  { title: "7th Second Term Tamil", url: "/pdfs/7TH/2ND TERM/7th Second Assessment TAMIL question paper.pdf" },

  // 3RD MID TERM
  { title: "7th Third Midterm English", url: "/pdfs/7TH/3RD MID TERM/7th Third Midterm ENGLISH question paper.pdf" },
  { title: "7th Third Midterm Maths", url: "/pdfs/7TH/3RD MID TERM/7th Third Midterm MATHS question paper.pdf" },
  { title: "7th Third Midterm Science", url: "/pdfs/7TH/3RD MID TERM/7th Third Midterm SCIENCE question paper.pdf" },
  { title: "7th Third Midterm Social", url: "/pdfs/7TH/3RD MID TERM/7th Third Midterm SOCIAL question paper.pdf" },
  { title: "7th Third Midterm Tamil", url: "/pdfs/7TH/3RD MID TERM/7th Third Midterm TAMIL question paper.pdf" },

  // 3RD TERM
  { title: "7th Third Term English", url: "/pdfs/7TH/3RD TERM/7th Social English Third Term Question Paper.pdf" },
  { title: "7th Third Term Maths", url: "/pdfs/7TH/3RD TERM/7th Social Maths Third Term Question Paper.pdf" },
  { title: "7th Third Term Social Science", url: "/pdfs/7TH/3RD TERM/7th Social Social Science Third Term Question Paper.pdf" },
  { title: "7th Third Term Tamil", url: "/pdfs/7TH/3RD TERM/7th Social Tamil Third Term Question Paper.pdf" },
],

"8th-Std-Question-Papers": [
  // 1ST MID TERM
  { title: "8th First Midterm English", url: "/pdfs/8TH/1ST MID TERM/8th English First Mid term question paper.pdf" },
  { title: "8th First Midterm Maths", url: "/pdfs/8TH/1ST MID TERM/8th Maths First Mid term question paper.pdf" },
  { title: "8th First Midterm Science", url: "/pdfs/8TH/1ST MID TERM/8th SCIENCE First Mid term question paper.pdf" },
  { title: "8th First Midterm Social", url: "/pdfs/8TH/1ST MID TERM/8th SOCIAL First Mid term question paper.pdf" },
  { title: "8th First Midterm Tamil", url: "/pdfs/8TH/1ST MID TERM/8th TAMIL First Mid term question paper.pdf" },

  // 2ND MID TERM
  { title: "8th Second Midterm English", url: "/pdfs/8TH/2ND MID TERM/8th Second Mid term English question paper.pdf" },
  { title: "8th Second Midterm Maths", url: "/pdfs/8TH/2ND MID TERM/8th Second Mid term Maths question paper.pdf" },
  { title: "8th Second Midterm Science", url: "/pdfs/8TH/2ND MID TERM/8th Second Mid term Science question paper.pdf" },
  { title: "8th Second Midterm Social", url: "/pdfs/8TH/2ND MID TERM/8th Second Mid term SOCIAL question paper.pdf" },
  { title: "8th Second Midterm Tamil", url: "/pdfs/8TH/2ND MID TERM/8th Second Mid term TAMIL question paper.pdf" },

  // 3RD MID TERM
  { title: "8th Third Midterm English", url: "/pdfs/8TH/3RD MID TERM/8th ENGLISH 3rd mid term 2025.pdf" },
  { title: "8th Third Midterm Maths", url: "/pdfs/8TH/3RD MID TERM/8th MATHS 3rd mid term 2025.pdf" },
  { title: "8th Third Midterm Science", url: "/pdfs/8TH/3RD MID TERM/8th SCIENCE 3rd mid term 2025.pdf" },
  { title: "8th Third Midterm Social", url: "/pdfs/8TH/3RD MID TERM/8th SOCIAL 3rd mid term 2025.pdf" },
  { title: "8th Third Midterm Tamil", url: "/pdfs/8TH/3RD MID TERM/8th TAMIL 3rd mid term 2025.pdf" },

  // ANNUAL EXAM
  { title: "8th Annual Exam English", url: "/pdfs/8TH/ANNUAL EXAM/8th annual exam ENGLISH 2024-2025.pdf" },
  { title: "8th Annual Exam Maths", url: "/pdfs/8TH/ANNUAL EXAM/8th annual exam MATHS 2024-2025.pdf" },
  { title: "8th Annual Exam Science", url: "/pdfs/8TH/ANNUAL EXAM/8th annual exam SCIENCE 2024-2025.pdf" },
  { title: "8th Annual Exam Social", url: "/pdfs/8TH/ANNUAL EXAM/8th annual exam SOCIAL 2024-2025.pdf" },
  { title: "8th Annual Exam Tamil", url: "/pdfs/8TH/ANNUAL EXAM/8th annual exam TAMIL 2024-2025.pdf" },

  // HALF YEARLY
  { title: "8th Half Yearly English", url: "/pdfs/8TH/HALF YEARLY/8th Half yearly exam ENGLISH question paper.pdf" },
  { title: "8th Half Yearly Maths", url: "/pdfs/8TH/HALF YEARLY/8th Half yearly exam MATHS question paper.pdf" },
  { title: "8th Half Yearly Science", url: "/pdfs/8TH/HALF YEARLY/8th Half yearly exam SCIENCE question paper.pdf" },
  { title: "8th Half Yearly Social", url: "/pdfs/8TH/HALF YEARLY/8th Half yearly exam SOCIAL question paper.pdf" },
  { title: "8th Half Yearly Tamil", url: "/pdfs/8TH/HALF YEARLY/8th Half yearly exam TAMIL question paper.pdf" },

  // QUARTERLY
  { title: "8th Quarterly English", url: "/pdfs/8TH/QUATERLY/8th Quarterly ENGLISH question paper 2024 -2025.pdf" },
  { title: "8th Quarterly Maths", url: "/pdfs/8TH/QUATERLY/8th Quarterly MATHS question paper 2024 -2025.pdf" },
  { title: "8th Quarterly Science", url: "/pdfs/8TH/QUATERLY/8th Quarterly SCIENCE question paper 2024 -2025.pdf" },
  { title: "8th Quarterly Social", url: "/pdfs/8TH/QUATERLY/8th Quarterly SOCIAL question paper 2024 -2025.pdf" },
  { title: "8th Quarterly Tamil", url: "/pdfs/8TH/QUATERLY/8th Quarterly TAMIL question paper 2024 -2025.pdf" },
],
"9th-Std-Question-Papers": [
  // 1ST MID TERM
  { title: "9th English First Midterm", url: "/pdfs/9TH/1ST MID TERM/9th English First Midterm 2024-2025.pdf" },
  { title: "9th Maths First Midterm", url: "/pdfs/9TH/1ST MID TERM/9th Maths First Midterm 2024-2025.pdf" },
  { title: "9th Science First Midterm", url: "/pdfs/9TH/1ST MID TERM/9th Science First Midterm 2024-2025.pdf" },
  { title: "9th Social First Midterm", url: "/pdfs/9TH/1ST MID TERM/9th Social First Midterm 2024-2025.pdf" },
  { title: "9th Tamil First Midterm", url: "/pdfs/9TH/1ST MID TERM/9th Tamil First Midterm 2024-2025.pdf" },

  // 2ND MID TERM
  { title: "9th English Second Midterm", url: "/pdfs/9TH/2ND MID TERM/9th English Second Midterm 2024_2025.pdf" },
  { title: "9th Maths Second Midterm", url: "/pdfs/9TH/2ND MID TERM/9th Maths Second Midterm 2024_2025.pdf" },
  { title: "9th Science Second Midterm", url: "/pdfs/9TH/2ND MID TERM/9th Science Second Midterm 2024_2025.pdf" },
  { title: "9th Social Second Midterm", url: "/pdfs/9TH/2ND MID TERM/9th Social Second Midterm 2024_2025.pdf" },
  { title: "9th Tamil Second Midterm", url: "/pdfs/9TH/2ND MID TERM/9th Tamil Second Midterm 2024_2025.pdf" },

  // 3RD MID TERM
  { title: "9th English Third Midterm", url: "/pdfs/9TH/3RD MID TERM/9th English 3rd Midterm question paper.pdf" },
  { title: "9th Maths Third Midterm", url: "/pdfs/9TH/3RD MID TERM/9th Maths 3rd Midterm question paper.pdf" },
  { title: "9th Science Third Midterm", url: "/pdfs/9TH/3RD MID TERM/9th Science 3rd Midterm question paper.pdf" },
  { title: "9th Social Third Midterm", url: "/pdfs/9TH/3RD MID TERM/9th Social 3rd Midterm question paper.pdf" },
  { title: "9th Tamil Third Midterm", url: "/pdfs/9TH/3RD MID TERM/9th Tamil 3rd Midterm question paper.pdf" },

  // QUARTERLY
  { title: "9th English Quarterly", url: "/pdfs/9TH/QUATERLY/9th English Quarterly Question Paper.pdf" },
  { title: "9th Maths Quarterly", url: "/pdfs/9TH/QUATERLY/9th Mathamatics Quarterly 2024_2025.pdf" },
  { title: "9th Science Quarterly", url: "/pdfs/9TH/QUATERLY/9th Science Quarterly Question Paper.pdf" },
  { title: "9th Social Quarterly", url: "/pdfs/9TH/QUATERLY/9th Social Science Quarterly 2024_2025.pdf" },
  { title: "9th Tamil Quarterly", url: "/pdfs/9TH/QUATERLY/9th Tamil Quarterly Question Paper.pdf" },

  // HALF YEARLY
  { title: "9th English Half Yearly", url: "/pdfs/9TH/HALF YEARLY/9th Half Year2024_2025 English.pdf" },
  { title: "9th Maths Half Yearly", url: "/pdfs/9TH/HALF YEARLY/9th Half Year2024_2025 Maths.pdf" },
  { title: "9th Science Half Yearly", url: "/pdfs/9TH/HALF YEARLY/9th Half Year2024_2025 Science.pdf" },
  { title: "9th Social Half Yearly", url: "/pdfs/9TH/HALF YEARLY/9th Half Year2024_2025 Social.pdf" },
  { title: "9th Tamil Half Yearly", url: "/pdfs/9TH/HALF YEARLY/9th Half Year2024_2025 Tamil.pdf" },

  // ANNUAL
  { title: "9th English Annual", url: "/pdfs/9TH/ANNUAL EXAM/9th English Annual Question Paper 24-25.pdf" },
  { title: "9th Maths Annual", url: "/pdfs/9TH/ANNUAL EXAM/9th Maths Annual Question Paper 24-25.pdf" },
  { title: "9th Science Annual", url: "/pdfs/9TH/ANNUAL EXAM/9th Science Annual Question Paper 24-25.pdf" },
  { title: "9th Social Annual", url: "/pdfs/9TH/ANNUAL EXAM/9th Social Annual Question Paper 24-25.pdf" },
  { title: "9th Tamil Annual", url: "/pdfs/9TH/ANNUAL EXAM/9th தமிழ் Annual Question Paper 24-25.pdf" }
],
"10th-Std-Question-Papers": [
  // 1ST REVISION
  { title: "10th First Revision English", url: "/pdfs/10TH/1ST REV/10th First Revision English Question paper.pdf" },
  { title: "10th First Revision Maths", url: "/pdfs/10TH/1ST REV/10th First Revision Maths question paper.pdf" },
  { title: "10th First Revision Science", url: "/pdfs/10TH/1ST REV/10th First Revision Science question paper.pdf" },
  { title: "10th First Revision Social", url: "/pdfs/10TH/1ST REV/10th First Revision Social question paper.pdf" },
  { title: "10th First Revision Tamil", url: "/pdfs/10TH/1ST REV/10th First Revision தமிழ் Question paper.pdf" },

  // 2ND REVISION
  { title: "10th Second Revision English", url: "/pdfs/10TH/2ND REV/10th Second Revision English question paper.pdf" },
  { title: "10th Second Revision Maths", url: "/pdfs/10TH/2ND REV/10th Second Revision Maths question paper.pdf" },
  { title: "10th Second Revision Science", url: "/pdfs/10TH/2ND REV/10th Second Revision Science question paper.pdf" },
  { title: "10th Second Revision Social", url: "/pdfs/10TH/2ND REV/10th Second Revision Social Science question paper.pdf" },
  { title: "10th Second Revision Tamil", url: "/pdfs/10TH/2ND REV/10th Second Revision தமிழ் question paper.pdf" },

  // HALF YEARLY
  { title: "10th Half Yearly English", url: "/pdfs/10TH/HALF YEARLY/10th Half Yearly English Question paper.pdf" },
  { title: "10th Half Yearly Maths", url: "/pdfs/10TH/HALF YEARLY/10th Half Yearly Maths Question paper.pdf" },
  { title: "10th Half Yearly Science", url: "/pdfs/10TH/HALF YEARLY/10th Half Yearly Science Question paper.pdf" },
  { title: "10th Half Yearly Social", url: "/pdfs/10TH/HALF YEARLY/10th Half Yearly Social Question paper.pdf" },
  { title: "10th Half Yearly Tamil", url: "/pdfs/10TH/HALF YEARLY/10th Half Yearly தமிழ் Question paper.pdf" },

  // PUBLIC EXAM
  { title: "10th Public Exam English", url: "/pdfs/10TH/PUBLIC EXAM/10th English Public Question paper 24-25.pdf" },
  { title: "10th Public Exam Maths", url: "/pdfs/10TH/PUBLIC EXAM/10th Maths Public Question paper 24-25.pdf" },
  { title: "10th Public Exam Science", url: "/pdfs/10TH/PUBLIC EXAM/10th Science Public Question paper 24-25.pdf" },
  { title: "10th Public Exam Social", url: "/pdfs/10TH/PUBLIC EXAM/10th Social Science Public Question paper 24-25.pdf" },
  { title: "10th Public Exam Tamil", url: "/pdfs/10TH/PUBLIC EXAM/10th தமிழ் Public Question paper 24-25.pdf" },

  // QUARTERLY
  { title: "10th Quarterly English", url: "/pdfs/10TH/QUATERLY/10th Quarterly English Question Paper.pdf" },
  { title: "10th Quarterly Maths", url: "/pdfs/10TH/QUATERLY/10th Quarterly Maths Question Paper.pdf" },
  { title: "10th Quarterly Science", url: "/pdfs/10TH/QUATERLY/10th Quarterly Science Question Paper.pdf" },
  { title: "10th Quarterly Social", url: "/pdfs/10TH/QUATERLY/10th Quarterly Social Question Paper.pdf" },
  { title: "10th Quarterly Tamil", url: "/pdfs/10TH/QUATERLY/10th Quarterly தமிழ் Question Paper.pdf" },

  // UNIT TEST 1
  { title: "10th Unit Test 1 English", url: "/pdfs/10TH/UNIT - 1/10th Unit test 1 English Question Paper.pdf" },
  { title: "10th Unit Test 1 Maths", url: "/pdfs/10TH/UNIT - 1/10th Unit test 1 Maths Question Paper.pdf" },
  { title: "10th Unit Test 1 Science", url: "/pdfs/10TH/UNIT - 1/10th Unit test 1 Science Question Paper.pdf" },
  { title: "10th Unit Test 1 Social", url: "/pdfs/10TH/UNIT - 1/10th Unit test 1 Social Question Paper.pdf" },
  { title: "10th Unit Test 1 Tamil", url: "/pdfs/10TH/UNIT - 1/10th Unit test 1 தமிழ் Question Paper.pdf" },

  // UNIT TEST 2
  { title: "10th Unit Test 2 English", url: "/pdfs/10TH/UNIT - 2/10th Unit test 2 English question paper.pdf" },
  { title: "10th Unit Test 2 Maths", url: "/pdfs/10TH/UNIT - 2/10th Unit test 2 Maths question paper.pdf" },
  { title: "10th Unit Test 2 Science", url: "/pdfs/10TH/UNIT - 2/10th Unit test 2 Science question paper.pdf" },
  { title: "10th Unit Test 2 Social", url: "/pdfs/10TH/UNIT - 2/10th Unit test 2 Social question paper.pdf" },
  { title: "10th Unit Test 2 Tamil", url: "/pdfs/10TH/UNIT - 2/10th Unit test 2 தமிழ் question paper.pdf" },

  // UNIT TEST 3
  { title: "10th Unit Test 3 English", url: "/pdfs/10TH/UNIT - 3/10th Unit test 3 English Question paper.pdf" },
  { title: "10th Unit Test 3 Maths", url: "/pdfs/10TH/UNIT - 3/10th Unit test 3 Maths Question paper.pdf" },
  { title: "10th Unit Test 3 Science", url: "/pdfs/10TH/UNIT - 3/10th Unit test 3 Science Question paper.pdf" },
  { title: "10th Unit Test 3 Social", url: "/pdfs/10TH/UNIT - 3/10th Unit test 3 Social Question paper.pdf" },
  { title: "10th Unit Test 3 Tamil", url: "/pdfs/10TH/UNIT - 3/10th Unit test 3 தமிழ் Question paper.pdf" }
],
"11th-Std-Science-Question-Papers": [
  // UNIT TEST 1
  { title: "11th Unit Test 1 Biology", url: "/pdfs/11TH SCI/UNIT - 1/11th Unit Test 1 Biology Question Paper.pdf" },
  { title: "11th Unit Test 1 Chemistry", url: "/pdfs/11TH SCI/UNIT - 1/11th Unit Test 1 Chemistry Question Paper.pdf" },
  { title: "11th Unit Test 1 Computer Science", url: "/pdfs/11TH SCI/UNIT - 1/11th Unit Test 1 Computer Science Question Paper.pdf" },
  { title: "11th Unit Test 1 English", url: "/pdfs/11TH SCI/UNIT - 1/11th Unit Test 1 English Question Paper.pdf" },
  { title: "11th Unit Test 1 Maths", url: "/pdfs/11TH SCI/UNIT - 1/11th Unit Test 1 Maths Question Paper.pdf" },
  { title: "11th Unit Test 1 Physics", url: "/pdfs/11TH SCI/UNIT - 1/11th Unit Test 1 Physics Question Paper.pdf" },
  { title: "11th Unit Test 1 Tamil", url: "/pdfs/11TH SCI/UNIT - 1/11th Unit Test 1 தமிழ் Question Paper.pdf" },

  // UNIT TEST 2
  { title: "11th Unit Test 2 Biology", url: "/pdfs/11TH SCI/UNIT - 2/11th Unit Test 2 Biology Question Paper.pdf" },
  { title: "11th Unit Test 2 Chemistry", url: "/pdfs/11TH SCI/UNIT - 2/11th Unit Test 2 Chemistry Question Paper.pdf" },
  { title: "11th Unit Test 2 Computer Science", url: "/pdfs/11TH SCI/UNIT - 2/11th Unit Test 2 Computer Science Question Paper.pdf" },
  { title: "11th Unit Test 2 English", url: "/pdfs/11TH SCI/UNIT - 2/11th Unit Test 2 English Question Paper.pdf" },
  { title: "11th Unit Test 2 Maths", url: "/pdfs/11TH SCI/UNIT - 2/11th Unit Test 2 Maths Question Paper.pdf" },
  { title: "11th Unit Test 2 Physics", url: "/pdfs/11TH SCI/UNIT - 2/11th Unit Test 2 Physics Question Paper.pdf" },
  { title: "11th Unit Test 2 Tamil", url: "/pdfs/11TH SCI/UNIT - 2/11th Unit Test 2 தமிழ் Question Paper.pdf" },

  // UNIT TEST 3
  { title: "11th Unit Test 3 Biology", url: "/pdfs/11TH SCI/UNIT - 3/11th Unit Test 3 Biology Question Paper.pdf" },
  { title: "11th Unit Test 3 Chemistry", url: "/pdfs/11TH SCI/UNIT - 3/11th Unit Test 3 Chemistry Question Paper.pdf" },
  { title: "11th Unit Test 3 Computer Science", url: "/pdfs/11TH SCI/UNIT - 3/11th Unit Test 3 Computer Science Question Paper.pdf" },
  { title: "11th Unit Test 3 English", url: "/pdfs/11TH SCI/UNIT - 3/11th Unit Test 3 English Question Paper.pdf" },
  { title: "11th Unit Test 3 Maths", url: "/pdfs/11TH SCI/UNIT - 3/11th Unit Test 3 Maths Question Paper.pdf" },
  { title: "11th Unit Test 3 Physics", url: "/pdfs/11TH SCI/UNIT - 3/11th Unit Test 3 Physics Question Paper.pdf" },
  { title: "11th Unit Test 3 Tamil", url: "/pdfs/11TH SCI/UNIT - 3/11th Unit Test 3 தமிழ் Question Paper.pdf" },

  // QUARTERLY
  { title: "11th Quarterly Biology", url: "/pdfs/11TH SCI/QUATERLY/11th Biology Quarterly Question Paper 24-25.pdf" },
  { title: "11th Quarterly Chemistry", url: "/pdfs/11TH SCI/QUATERLY/11th Chemistry Quarterly Question paper 24-25.pdf" },
  { title: "11th Quarterly Computer Science", url: "/pdfs/11TH SCI/QUATERLY/11th Computer Science Quarterly Question Paper 24-25.pdf" },
  { title: "11th Quarterly English", url: "/pdfs/11TH SCI/QUATERLY/11th English Quarterly Question paper 24-25.pdf" },
  { title: "11th Quarterly Maths", url: "/pdfs/11TH SCI/QUATERLY/11th Maths Quarterly Question paper 24-25.pdf" },
  { title: "11th Quarterly Physics", url: "/pdfs/11TH SCI/QUATERLY/11th Physics Quarterly Question paper 24-25.pdf" },
  { title: "11th Quarterly Tamil", url: "/pdfs/11TH SCI/QUATERLY/11th தமிழ் Quarterly Question paper 24-25.pdf" },

  // REVISION
  { title: "11th Revision Biology", url: "/pdfs/11TH SCI/REVISION/11th Revision Biology Question paper 24-25.pdf" },
  { title: "11th Revision Chemistry", url: "/pdfs/11TH SCI/REVISION/11th Revision Chemistry Question paper 24-25.pdf" },
  { title: "11th Revision Computer Science", url: "/pdfs/11TH SCI/REVISION/11th Revision Computer Science Question paper 24-25.pdf" },
  { title: "11th Revision English", url: "/pdfs/11TH SCI/REVISION/11th Revision English Question paper 24-25.pdf" },
  { title: "11th Revision Maths", url: "/pdfs/11TH SCI/REVISION/11th Revision Maths Question paper 24-25.pdf" },
  { title: "11th Revision Physics", url: "/pdfs/11TH SCI/REVISION/11th Revision Physics Question paper 24-25.pdf" },
  { title: "11th Revision Tamil", url: "/pdfs/11TH SCI/REVISION/11th Revision தமிழ் Question paper 24-25.pdf" },

  // HALF YEARLY
  { title: "11th Half Yearly Biology", url: "/pdfs/11TH SCI/HALF YEARLY/11th Biology Half Yearly Question paper 24-25.pdf" },
  { title: "11th Half Yearly Chemistry", url: "/pdfs/11TH SCI/HALF YEARLY/11th Chemistry Half Yearly Question paper 24-25.pdf" },
  { title: "11th Half Yearly Computer Science", url: "/pdfs/11TH SCI/HALF YEARLY/11th Computer Science Half Yearly Question paper 24-25.pdf" },
  { title: "11th Half Yearly English", url: "/pdfs/11TH SCI/HALF YEARLY/11th English Half Yearly Question paper 24-25.pdf" },
  { title: "11th Half Yearly Maths", url: "/pdfs/11TH SCI/HALF YEARLY/11th Maths Half Yearly Question paper 24-25.pdf" },
  { title: "11th Half Yearly Physics", url: "/pdfs/11TH SCI/HALF YEARLY/11th Physics Half Yearly Question paper 24-25.pdf" },
  { title: "11th Half Yearly Tamil", url: "/pdfs/11TH SCI/HALF YEARLY/11th தமிழ் Half Yearly Question paper 24-25.pdf" },

  // PUBLIC EXAM
  { title: "11th Public Exam Biology", url: "/pdfs/11TH SCI/PUBLIC EXAM/11th Biology Public Question paper 24-25.pdf" },
  { title: "11th Public Exam Chemistry", url: "/pdfs/11TH SCI/PUBLIC EXAM/11th Chemistry Public Question paper 24-25.pdf" },
  { title: "11th Public Exam Computer Science", url: "/pdfs/11TH SCI/PUBLIC EXAM/11th Computer Science Public Question paper 24-25.pdf" },
  { title: "11th Public Exam English", url: "/pdfs/11TH SCI/PUBLIC EXAM/11th English Public Question paper 24-25.pdf" },
  { title: "11th Public Exam French", url: "/pdfs/11TH SCI/PUBLIC EXAM/11th French Public Question paper 24-25.pdf" },
  { title: "11th Public Exam Maths", url: "/pdfs/11TH SCI/PUBLIC EXAM/11th Maths Public Question paper 24-25.pdf" },
  { title: "11th Public Exam Physics", url: "/pdfs/11TH SCI/PUBLIC EXAM/11th Physics Public Question paper 24-25.pdf" },
  { title: "11th Public Exam Tamil", url: "/pdfs/11TH SCI/PUBLIC EXAM/11th தமிழ் Public Question paper 24-25.pdf" }
],
"11th-Std-Commerce-Question-Papers": [
  // 1ST REVISION
  { title: "11th First Revision Accountancy", url: "/pdfs/11TH COM/1ST REV/11th Revision Accountancy Question paper 24-25.pdf" },
  { title: "11th First Revision Business Maths", url: "/pdfs/11TH COM/1ST REV/11th Revision Business Maths Question paper 24-25.pdf" },
  { title: "11th First Revision Commerce", url: "/pdfs/11TH COM/1ST REV/11th Revision Commerce Question paper 24-25.pdf" },
  { title: "11th First Revision Computer Application", url: "/pdfs/11TH COM/1ST REV/11th Revision Computer Application Question paper 24-25.pdf" },
  { title: "11th First Revision Economics", url: "/pdfs/11TH COM/1ST REV/11th Revision Economics Question paper 24-25.pdf" },
  { title: "11th First Revision English", url: "/pdfs/11TH COM/1ST REV/11th Revision English Question paper 24-25.pdf" },
  { title: "11th First Revision Tamil", url: "/pdfs/11TH COM/1ST REV/11th Revision தமிழ் Question paper 24-25.pdf" },

  // HALF YEARLY
  { title: "11th Half Yearly Accountancy", url: "/pdfs/11TH COM/HALF YEARLY/11th Accountancy Half Yearly Question paper 24-25.pdf" },
  { title: "11th Half Yearly Business Maths", url: "/pdfs/11TH COM/HALF YEARLY/11th Business Maths Half Yearly Question paper 24-25.pdf" },
  { title: "11th Half Yearly Commerce", url: "/pdfs/11TH COM/HALF YEARLY/11th Commerce Half Yearly Question paper 24-25.pdf" },
  { title: "11th Half Yearly Computer Application", url: "/pdfs/11TH COM/HALF YEARLY/11th Computer Application Half Yearly Question paper 24-25.pdf" },
  { title: "11th Half Yearly Economics", url: "/pdfs/11TH COM/HALF YEARLY/11th Economics Half Yearly Question paper 24-25.pdf" },
  { title: "11th Half Yearly English", url: "/pdfs/11TH COM/HALF YEARLY/11th English Half Yearly Question paper 24-25.pdf" },
  { title: "11th Half Yearly Tamil", url: "/pdfs/11TH COM/HALF YEARLY/11th தமிழ் Half Yearly Question paper 24-25.pdf" },

  // PUBLIC EXAM
  { title: "11th Public Exam Accountancy", url: "/pdfs/11TH COM/PUBLIC EXAM/11th Accountancy Public Question paper 24-25.pdf" },
  { title: "11th Public Exam Business Maths", url: "/pdfs/11TH COM/PUBLIC EXAM/11th Business Maths Public Question paper 24-25.pdf" },
  { title: "11th Public Exam Commerce", url: "/pdfs/11TH COM/PUBLIC EXAM/11th Commerce Public Question paper 24-25.pdf" },
  { title: "11th Public Exam Computer Application", url: "/pdfs/11TH COM/PUBLIC EXAM/11th Computer Application Public Question paper 24-25.pdf" },
  { title: "11th Public Exam Economics", url: "/pdfs/11TH COM/PUBLIC EXAM/11th Economics Public Question paper 24-25.pdf" },
  { title: "11th Public Exam English", url: "/pdfs/11TH COM/PUBLIC EXAM/11th English Public Question paper 24-25.pdf" },
  { title: "11th Public Exam French", url: "/pdfs/11TH COM/PUBLIC EXAM/11th French Public Question paper 24-25.pdf" },
  { title: "11th Public Exam Tamil", url: "/pdfs/11TH COM/PUBLIC EXAM/11th தமிழ் Public Question paper 24-25.pdf" },

  // QUARTERLY
  { title: "11th Quarterly Accountancy", url: "/pdfs/11TH COM/QUATERLY/11th Accountancy Quarterly Question paper 24-25.pdf" },
  { title: "11th Quarterly Business Maths", url: "/pdfs/11TH COM/QUATERLY/11th Business Maths Quarterly Question paper 24-25.pdf" },
  { title: "11th Quarterly Commerce", url: "/pdfs/11TH COM/QUATERLY/11th Commerce Quarterly Question paper 24-25.pdf" },
  { title: "11th Quarterly Computer Application", url: "/pdfs/11TH COM/QUATERLY/11th Computer Application Quarterly Question paper 24-25.pdf" },
  { title: "11th Quarterly Economics", url: "/pdfs/11TH COM/QUATERLY/11th Economics Quarterly Question paper 24-25.pdf" },
  { title: "11th Quarterly English", url: "/pdfs/11TH COM/QUATERLY/11th English Quarterly Question paper 24-25.pdf" },
  { title: "11th Quarterly Tamil", url: "/pdfs/11TH COM/QUATERLY/11th தமிழ் Quarterly Question paper 24-25.pdf" },

  // UNIT TEST 1
  { title: "11th Unit Test 1 Accountancy", url: "/pdfs/11TH COM/UNIT - 1/11th Unit Test 1 Accountancy Question Paper.pdf" },
  { title: "11th Unit Test 1 Business Maths", url: "/pdfs/11TH COM/UNIT - 1/11th Unit Test 1 Business Maths Question Paper.pdf" },
  { title: "11th Unit Test 1 Commerce", url: "/pdfs/11TH COM/UNIT - 1/11th Unit Test 1 Commerce Question Paper.pdf" },
  { title: "11th Unit Test 1 Computer Application", url: "/pdfs/11TH COM/UNIT - 1/11th Unit Test 1 Computer Application Question Paper.pdf" },
  { title: "11th Unit Test 1 Economics", url: "/pdfs/11TH COM/UNIT - 1/11th Unit Test 1 Economics Question Paper.pdf" },
  { title: "11th Unit Test 1 English", url: "/pdfs/11TH COM/UNIT - 1/11th Unit Test 1 English Question Paper.pdf" },
  { title: "11th Unit Test 1 Tamil", url: "/pdfs/11TH COM/UNIT - 1/11th Unit Test 1 தமிழ் Question Paper.pdf" },

  // UNIT TEST 2
  { title: "11th Unit Test 2 Accountancy", url: "/pdfs/11TH COM/UNIT - 2/11th Unit Test 2 Accountancy Question Paper.pdf" },
  { title: "11th Unit Test 2 Business Maths", url: "/pdfs/11TH COM/UNIT - 2/11th Unit Test 2 Business Maths Question Paper.pdf" },
  { title: "11th Unit Test 2 Commerce", url: "/pdfs/11TH COM/UNIT - 2/11th Unit Test 2 Commerce Question Paper.pdf" },
  { title: "11th Unit Test 2 Computer Application", url: "/pdfs/11TH COM/UNIT - 2/11th Unit Test 2 Computer Application Question Paper.pdf" },
  { title: "11th Unit Test 2 Economics", url: "/pdfs/11TH COM/UNIT - 2/11th Unit Test 2 Economics Question Paper.pdf" },
  { title: "11th Unit Test 2 English", url: "/pdfs/11TH COM/UNIT - 2/11th Unit Test 2 English Question Paper.pdf" },
  { title: "11th Unit Test 2 Tamil", url: "/pdfs/11TH COM/UNIT - 2/11th Unit Test 2 தமிழ் Question Paper.pdf" },

  // UNIT TEST 3
  { title: "11th Unit Test 3 Accountancy", url: "/pdfs/11TH COM/UNIT - 3/11th Unit Test 3 Accountancy Question Paper.pdf" },
  { title: "11th Unit Test 3 Business Maths", url: "/pdfs/11TH COM/UNIT - 3/11th Unit Test 3 Business Maths Question Paper.pdf" },
  { title: "11th Unit Test 3 Commerce", url: "/pdfs/11TH COM/UNIT - 3/11th Unit Test 3 Commerce Question Paper.pdf" },
  { title: "11th Unit Test 3 Computer Application", url: "/pdfs/11TH COM/UNIT - 3/11th Unit Test 3 Computer Application Question Paper.pdf" },
  { title: "11th Unit Test 3 Economics", url: "/pdfs/11TH COM/UNIT - 3/11th Unit Test 3 Economics Question Paper.pdf" },
  { title: "11th Unit Test 3 English", url: "/pdfs/11TH COM/UNIT - 3/11th Unit Test 3 English Question Paper.pdf" },
  { title: "11th Unit Test 3 Tamil", url: "/pdfs/11TH COM/UNIT - 3/11th Unit Test 3 தமிழ் Question Paper.pdf" }
],
"12th-Std-Commerce-Question-Papers": [
  // 1ST REVISION
  { "title": "12th 1st Revision Accountancy", "url": "/pdfs/12TH COM/1ST REV/12th 1st Revision Accountancy Question paper 24-25.pdf" },
  { "title": "12th 1st Revision Business Maths", "url": "/pdfs/12TH COM/1ST REV/12th 1st Revision Business Maths Question paper 24-25.pdf" },
  { "title": "12th 1st Revision Commerce", "url": "/pdfs/12TH COM/1ST REV/12th 1st Revision Commerce Question paper 24-25.pdf" },
  { "title": "12th 1st Revision Computer Application", "url": "/pdfs/12TH COM/1ST REV/12th 1st Revision Computer Application Question paper 24-25.pdf" },
  { "title": "12th 1st Revision Economics", "url": "/pdfs/12TH COM/1ST REV/12th 1st Revision Economics Question Paper 24-25.pdf" },
  { "title": "12th 1st Revision English", "url": "/pdfs/12TH COM/1ST REV/12th 1st Revision English Question Paper 24-25.pdf" },
  { "title": "12th 1st Revision Tamil", "url": "/pdfs/12TH COM/1ST REV/12th 1st Revision தமிழ் Question Paper 24-25.pdf" },

  // 2ND REVISION
  { "title": "12th 2nd Revision Accountancy", "url": "/pdfs/12TH COM/2ND REV/12th 2nd Revision Accountancy Question paper 24-25.pdf" },
  { "title": "12th 2nd Revision Business Maths", "url": "/pdfs/12TH COM/2ND REV/12th 2nd Revision Business Maths Question paper 24-25.pdf" },
  { "title": "12th 2nd Revision Commerce", "url": "/pdfs/12TH COM/2ND REV/12th 2nd Revision Commerce Question paper 24-25.pdf" },
  { "title": "12th 2nd Revision Computer Application", "url": "/pdfs/12TH COM/2ND REV/12th 2nd Revision Computer Application Question paper 24-25.pdf" },
  { "title": "12th 2nd Revision Economics", "url": "/pdfs/12TH COM/2ND REV/12th 2nd Revision Economics Question paper 24-25.pdf" },
  { "title": "12th 2nd Revision English", "url": "/pdfs/12TH COM/2ND REV/12th 2nd Revision English Question paper 24-25.pdf" },
  { "title": "12th 2nd Revision Tamil", "url": "/pdfs/12TH COM/2ND REV/12th 2nd Revision தமிழ் Question paper 24-25.pdf" },

  // HALF YEARLY
  { "title": "12th Accountancy Half Yearly", "url": "/pdfs/12TH COM/HALF YEARLY/12th Accountancy Half Yearly Question paper 24-25.pdf" },
  { "title": "12th Business Maths Half Yearly", "url": "/pdfs/12TH COM/HALF YEARLY/12th Business Maths Half Yearly Question paper 24-25.pdf" },
  { "title": "12th Commerce Half Yearly", "url": "/pdfs/12TH COM/HALF YEARLY/12th Commerce Half Yearly Question paper 24-25.pdf" },
  { "title": "12th Economics Half Yearly", "url": "/pdfs/12TH COM/HALF YEARLY/12th Economics Half Yearly Question paper 24-25.pdf" },
  { "title": "12th English Half Yearly", "url": "/pdfs/12TH COM/HALF YEARLY/12th English Half Yearly Question paper 24-25.pdf" },
  { "title": "12th Tamil Half Yearly", "url": "/pdfs/12TH COM/HALF YEARLY/12th தமிழ் Half Yearly Question paper 24-25.pdf" },

  // PUBLIC EXAM
  { "title": "12th Accountancy Public Exam", "url": "/pdfs/12TH COM/PUBLIC EXAM/12th Accountancy Public Question paper 24-25.pdf" },
  { "title": "12th Business Maths Public Exam", "url": "/pdfs/12TH COM/PUBLIC EXAM/12th Business Maths Public Question paper 24-25.pdf" },
  { "title": "12th Commerce Public Exam", "url": "/pdfs/12TH COM/PUBLIC EXAM/12th Commerce Public Question paper 24-25.pdf" },
  { "title": "12th Computer Application Public Exam", "url": "/pdfs/12TH COM/PUBLIC EXAM/12th Computer Application Public Question paper 24-25.pdf" },
  { "title": "12th Economics Public Exam", "url": "/pdfs/12TH COM/PUBLIC EXAM/12th Economics Public Question paper 24-25.pdf" },
  { "title": "12th English Public Exam", "url": "/pdfs/12TH COM/PUBLIC EXAM/12th English Public Question paper 24-25.pdf" },
  { "title": "12th Tamil Public Exam", "url": "/pdfs/12TH COM/PUBLIC EXAM/12th தமிழ் Public Question paper 24-25.pdf" },

  // QUARTERLY
  { "title": "12th English Quarterly", "url": "/pdfs/12TH COM/QUATERLY/12th English Quarterly Question Paper 24-25.pdf" },
  { "title": "12th Accountancy Quarterly", "url": "/pdfs/12TH COM/QUATERLY/12th Accountancy Quarterly Question paper 24-25.pdf" },
  { "title": "12th Business Maths Quarterly", "url": "/pdfs/12TH COM/QUATERLY/12th Business Maths Quarterly Question paper 24-25.pdf" },
  { "title": "12th Commerce Quarterly", "url": "/pdfs/12TH COM/QUATERLY/12th Commerce Quarterly Question paper 24-25.pdf" },
  { "title": "12th Computer Application Quarterly", "url": "/pdfs/12TH COM/QUATERLY/12th Computer application Quarterly Question paper 24-25.pdf" },
  { "title": "12th Economics Quarterly", "url": "/pdfs/12TH COM/QUATERLY/12th Economics Quarterly Question paper 24-25.pdf" },
  { "title": "12th Tamil Quarterly", "url": "/pdfs/12TH COM/QUATERLY/12th தமிழ் Quarterly Question paper 24-25.pdf" },

  // UNIT TEST - 1
  { "title": "12th Unit Test 1 Accountancy", "url": "/pdfs/12TH COM/UNIT - 1/12th Accountancy Unit Test-1 Question Paper 24-25.pdf" },
  { "title": "12th Unit Test 1 English", "url": "/pdfs/12TH COM/UNIT - 1/12th English Unit-1 Question paper 24-25.pdf" },
  { "title": "12th Unit Test 1 Business Maths", "url": "/pdfs/12TH COM/UNIT - 1/12th Unit Test-1 Business Maths Question Paper 24-25.pdf" },
  { "title": "12th Unit Test 1 Computer Application", "url": "/pdfs/12TH COM/UNIT - 1/12th Unit Test-1 CA Question Paper 24-25.pdf" },
  { "title": "12th Unit Test 1 Commerce", "url": "/pdfs/12TH COM/UNIT - 1/12th Unit Test-1 Commerce Question Paper 24-25.pdf" },
  { "title": "12th Unit Test 1 Economics", "url": "/pdfs/12TH COM/UNIT - 1/12th Unit Test-1 Economics Question Paper 24-25.pdf" },
  { "title": "12th Unit Test 1 Tamil", "url": "/pdfs/12TH COM/UNIT - 1/12th தமிழ் Unit-1 Question paper 24-25.pdf" },

  // UNIT TEST - 2
  { "title": "12th Unit Test 2 Accountancy", "url": "/pdfs/12TH COM/UNIT - 2/12th Unit Test - 2 Accountancy Question Paper 24-25.pdf" },
  { "title": "12th Unit Test 2 Business Maths", "url": "/pdfs/12TH COM/UNIT - 2/12th Unit Test - 2 Business Maths Question Paper 24-25.pdf" },
  { "title": "12th Unit Test 2 Commerce", "url": "/pdfs/12TH COM/UNIT - 2/12th Unit Test - 2 Commerce Question Paper 24-25.pdf" },
  { "title": "12th Unit Test 2 Economics", "url": "/pdfs/12TH COM/UNIT - 2/12th Unit Test - 2 Economic Question Paper 24-25.pdf" },
  { "title": "12th Unit Test 2 English", "url": "/pdfs/12TH COM/UNIT - 2/12th Unit Test - 2 English Question Paper 24-25.pdf" },
  { "title": "12th Unit Test 2 Computer Application", "url": "/pdfs/12TH COM/UNIT - 2/12th Unit Test-2 CA Question Paper 24-25.pdf" },
  { "title": "12th Unit Test 2 Tamil", "url": "/pdfs/12TH COM/UNIT - 2/12th Unit Test - 2 தமிழ் Question Paper 24-25.pdf" },

  // UNIT TEST - 3
  { "title": "12th Unit Test 3 Accountancy", "url": "/pdfs/12TH COM/UNIT - 3/12th Unit Test - 3 Accountancy Question Paper 24-25.pdf" },
  { "title": "12th Unit Test 3 Commerce", "url": "/pdfs/12TH COM/UNIT - 3/12th Unit Test - 3 Commerce Question Paper 24-25.pdf" },
  { "title": "12th Unit Test 3 English", "url": "/pdfs/12TH COM/UNIT - 3/12th Unit Test - 3 English Question Paper 24-25.pdf" },
  { "title": "12th Unit Test 3 Tamil", "url": "/pdfs/12TH COM/UNIT - 3/12th Unit Test - 3 தமிழ் Question Paper 24-25.pdf" },
  { "title": "12th Unit Test 3 Business Maths", "url": "/pdfs/12TH COM/UNIT - 3/12th Unit Test 3 Business Maths Question Paper.pdf" },
  { "title": "12th Unit Test 3 Economics", "url": "/pdfs/12TH COM/UNIT - 3/12th Unit Test 3 Economics Question Paper.pdf" }
],
"12th-Std-Science-Question-Papers": [
  // 1ST REVISION
  { "title": "12th 1st Revision Biology", "url": "/pdfs/12TH SCI/1ST REV/12th 1st Revision Biology Question paper 24-25.pdf" },
  { "title": "12th 1st Revision Chemistry", "url": "/pdfs/12TH SCI/1ST REV/12th 1st Revision Chemistry Question paper 24-25.pdf" },
  { "title": "12th 1st Revision Computer Science", "url": "/pdfs/12TH SCI/1ST REV/12th 1st Revision Computer Science Question paper 24-25.pdf" },
  { "title": "12th 1st Revision English", "url": "/pdfs/12TH SCI/1ST REV/12th 1st Revision English Question Paper 24-25.pdf" },
  { "title": "12th 1st Revision Mathematics", "url": "/pdfs/12TH SCI/1ST REV/12th 1st Revision Mathematics Question paper 24-25.pdf" },
  { "title": "12th 1st Revision Physics", "url": "/pdfs/12TH SCI/1ST REV/12th 1st Revision Physics Question Paper 24-25.pdf" },
  { "title": "12th 1st Revision Tamil", "url": "/pdfs/12TH SCI/1ST REV/12th 1st Revision தமிழ் Question Paper 24-25.pdf" },

  // 2ND REVISION
  { "title": "12th 2nd Revision Biology", "url": "/pdfs/12TH SCI/2ND REV/12th 2nd Revision Biology Question paper 24-25.pdf" },
  { "title": "12th 2nd Revision Computer Science", "url": "/pdfs/12TH SCI/2ND REV/12th 2nd Revision Computer Science Question paper 24-25.pdf" },
  { "title": "12th 2nd Revision English", "url": "/pdfs/12TH SCI/2ND REV/12th 2nd Revision English Question paper 24-25.pdf" },
  { "title": "12th 2nd Revision Physics", "url": "/pdfs/12TH SCI/2ND REV/12th 2nd Revision Physics Question paper 24-25.pdf" },
  { "title": "12th 2nd Revision Tamil", "url": "/pdfs/12TH SCI/2ND REV/12th 2nd Revision தமிழ் Question paper 24-25.pdf" },

  // HALF YEARLY
  { "title": "12th Biology Half Yearly", "url": "/pdfs/12TH SCI/HALF YEARLY/12th Biology Half Yearly Question paper 24-25.pdf" },
  { "title": "12th Chemistry Half Yearly", "url": "/pdfs/12TH SCI/HALF YEARLY/12th Chemistry Half Yearly Question paper 24-25.pdf" },
  { "title": "12th Computer Science Half Yearly", "url": "/pdfs/12TH SCI/HALF YEARLY/12th Computer Science Half Yearly Question paper 24-25.pdf" },
  { "title": "12th English Half Yearly", "url": "/pdfs/12TH SCI/HALF YEARLY/12th English Half Yearly Question paper 24-25.pdf" },
  { "title": "12th Mathematics Half Yearly", "url": "/pdfs/12TH SCI/HALF YEARLY/12th Mathematic Half Yearly Question paper 24-25.pdf" },
  { "title": "12th Physics Half Yearly", "url": "/pdfs/12TH SCI/HALF YEARLY/12th Physics Half Yearly Question paper 24-25.pdf" },
  { "title": "12th Tamil Half Yearly", "url": "/pdfs/12TH SCI/HALF YEARLY/12th தமிழ் Half Yearly Question paper 24-25.pdf" },

  // PUBLIC EXAM
  { "title": "12th Botany Public Exam", "url": "/pdfs/12TH SCI/PUBLIC EXAM/12th Botany Public Question paper 24-25.pdf" },
  { "title": "12th English Public Exam", "url": "/pdfs/12TH SCI/PUBLIC EXAM/12th English Public Question paper 24-25.pdf" },
  { "title": "12th Physics Public Exam", "url": "/pdfs/12TH SCI/PUBLIC EXAM/12th Physics Public Question paper 24-25.pdf" },
  { "title": "12th Tamil Public Exam", "url": "/pdfs/12TH SCI/PUBLIC EXAM/12th தமிழ் Public Question paper 24-25.pdf" },

  // QUARTERLY
  { "title": "12th English Quarterly", "url": "/pdfs/12TH SCI/QUATERLY/12th English Quarterly Question Paper 24-25.pdf" },
  { "title": "12th Biology Quarterly", "url": "/pdfs/12TH SCI/QUATERLY/12th Biology Quarterly Question paper 24-25.pdf" },
  { "title": "12th Chemistry Quarterly", "url": "/pdfs/12TH SCI/QUATERLY/12th Chemistry Quarterly Question paper 24-25.pdf" },
  { "title": "12th Mathematics Quarterly", "url": "/pdfs/12TH SCI/QUATERLY/12th Mathematics Quarterly Question paper 24-25.pdf" },
  { "title": "12th Physics Quarterly", "url": "/pdfs/12TH SCI/QUATERLY/12th Physics Quarterly Question paper 24-25.pdf" },
  { "title": "12th Tamil Quarterly", "url": "/pdfs/12TH SCI/QUATERLY/12th தமிழ் Quarterly Question paper 24-25.pdf" },

  // UNIT TEST - 1
  { "title": "12th Unit Test 1 Biology", "url": "/pdfs/12TH SCI/UNIT - 1/12th Biology Unit-1 Question paper 24-25.pdf" },
  { "title": "12th Unit Test 1 Chemistry", "url": "/pdfs/12TH SCI/UNIT - 1/12th Chemistry Unit-1 Question paper 24-25.pdf" },
  { "title": "12th Unit Test 1 Computer Science", "url": "/pdfs/12TH SCI/UNIT - 1/12th Computer Science Unit-1 Question paper 24-25.pdf" },
  { "title": "12th Unit Test 1 English", "url": "/pdfs/12TH SCI/UNIT - 1/12th English Unit-1 Question paper 24-25.pdf" },
  { "title": "12th Unit Test 1 Mathematics", "url": "/pdfs/12TH SCI/UNIT - 1/12th Mathematics Unit-1 Question paper 24-25.pdf" },
  { "title": "12th Unit Test 1 Physics", "url": "/pdfs/12TH SCI/UNIT - 1/12th Physics Unit-1 Question paper 24-25.pdf" },
  { "title": "12th Unit Test 1 Tamil", "url": "/pdfs/12TH SCI/UNIT - 1/12th தமிழ் Unit-1 Question paper 24-25.pdf" },

  // UNIT TEST - 2
  { "title": "12th Unit Test 2 Biology", "url": "/pdfs/12TH SCI/UNIT - 2/12th Unit Test - 2 Biology Question paper 24-25.pdf" },
  { "title": "12th Unit Test 2 Computer Science", "url": "/pdfs/12TH SCI/UNIT - 2/12th Unit Test - 2 Computer Science Question paper 24-25.pdf" },
  { "title": "12th Unit Test 2 English", "url": "/pdfs/12TH SCI/UNIT - 2/12th Unit Test - 2 English Question paper 24-25.pdf" },
  { "title": "12th Unit Test 2 Mathematics", "url": "/pdfs/12TH SCI/UNIT - 2/12th Unit Test - 2 Mathematics Question paper 24-25.pdf" },
  { "title": "12th Unit Test 2 Physics", "url": "/pdfs/12TH SCI/UNIT - 2/12th Unit Test - 2 Physics Question paper 24-25.pdf" },
  { "title": "12th Unit Test 2 Tamil", "url": "/pdfs/12TH SCI/UNIT - 2/12th Unit Test - 2 தமிழ் Question Paper 24-25.pdf" },
  { "title": "12th Unit Test 2 Chemistry", "url": "/pdfs/12TH SCI/UNIT - 2/12th Unit Test - 2 Chemistry Question paper 24-25.pdf" },

  // UNIT TEST - 3
  { "title": "12th Unit Test 3 Biology", "url": "/pdfs/12TH SCI/UNIT - 3/12th Unit Test - 3 Biology Question Paper 24-25.pdf" },
  { "title": "12th Unit Test 3 Chemistry", "url": "/pdfs/12TH SCI/UNIT - 3/12th Unit Test - 3 Chemistry Question Paper 24-25.pdf" },
  { "title": "12th Unit Test 3 Computer Science", "url": "/pdfs/12TH SCI/UNIT - 3/12th Unit Test - 3 Computer Science Question Paper 24-25.pdf" },
  { "title": "12th Unit Test 3 English", "url": "/pdfs/12TH SCI/UNIT - 3/12th Unit Test - 3 English Question Paper 24-25.pdf" },
  { "title": "12th Unit Test 3 Mathematics", "url": "/pdfs/12TH SCI/UNIT - 3/12th Unit Test - 3 Mathematics Question Paper 24-25.pdf" },
  { "title": "12th Unit Test 3 Physics", "url": "/pdfs/12TH SCI/UNIT - 3/12th Unit Test - 3 Physics Question Paper 24-25.pdf" },
  { "title": "12th Unit Test 3 Tamil", "url": "/pdfs/12TH SCI/UNIT - 3/12th Unit Test - 3 தமிழ் Question Paper 24-25.pdf" }
]



  // Add other subjects similarly...
};

export default function NoteResources() {
  const { subject } = useParams();
  const resources = notesResources[subject || ""] || [];
  const navigate = useNavigate();

  return (
    <div className="p-6">
       {/* Back Button */}
      <button
        onClick={() => navigate(-1)} // go back to previous page
        className="flex items-center gap-2 text-red-600 hover:text-red-800 mb-4"
      >
        <X className="w-5 h-5" />
        Back
      </button>
      <h1 className="text-2xl font-bold text-[#0B2C4D] mb-4">
        Resources for: {subject}
      </h1>

      {resources.length === 0 ? (
        <p>No resources available for this subject.</p>
      ) : (
        <ul className="space-y-4">
  {resources.map((res, idx) => (
    <li
      key={idx}
      className="border rounded-lg p-4 shadow-sm flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3"
    >
      {/* Title */}
      <span className="text-[#0B2C4D] font-medium">{res.title}</span>

      {/* Buttons */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => window.open(res.url, "_blank", "noopener,noreferrer")}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition w-full sm:w-auto"
        >
          View
        </button>

        <a href={res.url} download className="w-full sm:w-auto">
          <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition w-full sm:w-auto">
            Download
          </button>
        </a>
      </div>
    </li>
  ))}
</ul>
      )}
    </div>
  );
}
