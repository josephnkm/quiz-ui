import useAxios from "../Utils/AxiosInstance/useAxios";
import { GET_ALL_QUIZ_URL, UPDATE_QUIZ_URL, SAVE_ALL_QUIZ_URL, PARSE_TEXT_TO_QUIZ_MCQ_URL } from "../Utils/endpoints";

const QuizApiService = () => {
  const { getRequest, postRequest, putRequest } = useAxios();

  const fetchAllQuiz = async () => {
    const response = await getRequest(GET_ALL_QUIZ_URL);
    if (response.data.data.length !== 0) {
      return response.data.data;
    }
  };

  const updateQuiz = async ({ questionId, payload }) => {
    const url = UPDATE_QUIZ_URL.replace("{questionId}", questionId);
    const response = await putRequest(url, payload);
    if (response.data) return response.data;
  };

  const parseTextToQuizMCQ = async ({ payload }) => {
    const url = PARSE_TEXT_TO_QUIZ_MCQ_URL;
    const response = await postRequest(url, payload);
    if (response.data) return response.data;
  };

  const saveAllQuiz = async ({ payload }) => {
    const url = SAVE_ALL_QUIZ_URL;
    const response = await postRequest(url, payload);
    if (response.data) return response.data;
  };

  return { fetchAllQuiz, updateQuiz, parseTextToQuizMCQ, saveAllQuiz };
};

export default QuizApiService;
