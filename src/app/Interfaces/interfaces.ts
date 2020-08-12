export interface dataApi {
    response_code: number;
    results: question [];
}

export interface question {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}