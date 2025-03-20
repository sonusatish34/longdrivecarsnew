import { useState } from "react";

const options = [
    { value: "product_info", label: "Product Information" },
    { value: "order_status", label: "Order Status" },
    { value: "support", label: "Support Request" },
];

const solutions = {
    product_info: "Here is the product information: This is a great product.",
    order_status: "Your order is being processed and will be shipped soon.",
    support: "For support, you can reach us at support@example.com.",
};

export default function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState("");

    const handleSendMessage = () => {
        // Add user message to chat
        setMessages([...messages, { type: "user", text: userInput }]);

        // Get bot response based on user input
        const response = solutions[userInput] || "Please choose a valid option.";
        setMessages((prevMessages) => [
            ...prevMessages,
            { type: "bot", text: response },
        ]);

        // Clear the input field
        setUserInput("");
    };

    return (
        <div className="flex flex-col p-6 bg-gray-100 rounded-lg shadow-lg max-w-md mx-auto mt-10">
            <div className="overflow-y-auto h-96 mb-4">
                <div className="space-y-4">
                    {messages.map((message, index) => (
                        <div key={index} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                            <div
                                className={`p-3 max-w-xs rounded-lg ${message.type === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}
                            >
                                {message.text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col">
                <input
                    type="text"
                    className="p-2 border border-gray-300 rounded-lg mb-4"
                    placeholder="Type your message"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <button
                    onClick={handleSendMessage}
                    className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
                >
                    Send
                </button>
            </div>
            <div className="mt-4">
                <p className="text-sm font-semibold">Or choose an option:</p>
                <div className="space-y-2">
                    {options.map((option) => (
                        <button
                            key={option.value}
                            onClick={() => setUserInput(option.value)}
                            className="w-full text-left p-2 border border-gray-300 rounded-lg hover:bg-gray-200"
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
