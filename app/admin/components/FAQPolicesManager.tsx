"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/Button";

export default function FAQPoliciesManager() {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "How does SAGE connect families with care communities?",
      answer:
        "SAGE uses a guided discovery process that matches your loved one’s care needs, location, and budget with trusted local communities.",
    },
    {
      id: 2,
      question: "Is SAGE really free for families?",
      answer:
        "Yes. Our service is completely free for families. We’re supported through partnerships with licensed care communities.",
    },
  ]);

  const [policies, setPolicies] = useState([
    {
      id: 1,
      title: "Privacy Policy",
      content:
        "SAGE respects all users’ privacy and complies with HIPAA and GDPR standards. Personal data is never shared without consent.",
    },
    {
      id: 2,
      title: "Terms of Use",
      content:
        "By using SAGE’s services, users agree to our fair use, accessibility, and ethical compliance policies.",
    },
  ]);

  const [editing, setEditing] = useState<any>(null);
  const [newItem, setNewItem] = useState({ type: "faq", question: "", answer: "" });

  const handleSave = () => {
    if (editing) {
      setFaqs((prev) =>
        prev.map((f) => (f.id === editing.id ? editing : f))
      );
      setEditing(null);
    } else if (newItem.type === "faq") {
      setFaqs((prev) => [
        ...prev,
        { id: prev.length + 1, question: newItem.question, answer: newItem.answer },
      ]);
      setNewItem({ type: "faq", question: "", answer: "" });
    } else {
      setPolicies((prev) => [
        ...prev,
        { id: prev.length + 1, title: newItem.question, content: newItem.answer },
      ]);
      setNewItem({ type: "policy", question: "", answer: "" });
    }
  };

  return (
    <section className="mt-16 bg-white rounded-3xl p-8 shadow-md border border-sageMint">
      <h2 className="text-2xl font-heading text-sageGreen mb-6 text-center">
        Manage FAQs & Policies
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        {["faq", "policy"].map((t) => (
          <Button
            key={t}
            variant={newItem.type === t ? "default" : "secondary"}
            onClick={() => setNewItem({ ...newItem, type: t })}
          >
            {t === "faq" ? "FAQs" : "Policies"}
          </Button>
        ))}
      </div>

      {/* Existing Items */}
      <div className="grid md:grid-cols-2 gap-6">
        <AnimatePresence>
          {(newItem.type === "faq" ? faqs : policies).map((item: any) => (
            <motion.div
              key={item.id}
              className="border border-sageMint rounded-2xl p-6 bg-beige/30 hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <h3 className="text-lg font-heading text-sageGreen mb-2">
                {newItem.type === "faq" ? item.question : item.title}
              </h3>
              <p className="text-grayText mb-4">
                {newItem.type === "faq" ? item.answer : item.content}
              </p>
              <div className="flex gap-3">
                <Button variant="secondary" onClick={() => setEditing(item)}>
                  Edit
                </Button>
                <Button
                  variant="secondary"
                  onClick={() =>
                    newItem.type === "faq"
                      ? setFaqs(faqs.filter((f) => f.id !== item.id))
                      : setPolicies(policies.filter((p) => p.id !== item.id))
                  }
                >
                  Delete
                </Button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Add/Edit Form */}
      <div className="mt-12 border-t border-sageMint pt-6">
        <h3 className="text-xl font-heading text-sageGreen mb-4 text-center">
          {editing ? "Edit Entry" : "Add New Entry"}
        </h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            placeholder={
              newItem.type === "faq" ? "Question / Title" : "Policy Title"
            }
            value={editing ? editing.question || editing.title : newItem.question}
            onChange={(e) =>
              editing
                ? setEditing({ ...editing, question: e.target.value })
                : setNewItem({ ...newItem, question: e.target.value })
            }
            className="border-2 border-sageMint rounded-xl p-3 w-full"
          />
          <input
            type="text"
            placeholder={
              newItem.type === "faq" ? "Answer" : "Policy Content"
            }
            value={editing ? editing.answer || editing.content : newItem.answer}
            onChange={(e) =>
              editing
                ? setEditing({ ...editing, answer: e.target.value })
                : setNewItem({ ...newItem, answer: e.target.value })
            }
            className="border-2 border-sageMint rounded-xl p-3 w-full"
          />
        </div>
        <div className="flex justify-center gap-3">
          <Button onClick={handleSave}>{editing ? "Save Changes" : "Add Entry"}</Button>
          {editing && (
            <Button variant="secondary" onClick={() => setEditing(null)}>
              Cancel
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
