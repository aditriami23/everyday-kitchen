import { useState } from 'react';
import { Clock, Users, ChefHat, Printer, Check, Minus, Plus, AlertCircle, Utensils } from 'lucide-react';
import { RecipeData } from '../types';

interface RecipeCardProps {
  recipe: RecipeData;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const [servingMultiplier, setServingMultiplier] = useState<number>(1);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});

  const baseServings = recipe.servings;
  const currentServings = Math.round(baseServings * servingMultiplier);

  const toggleIngredient = (idx: number) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const adjustServings = (delta: number) => {
    setServingMultiplier((prev) => {
      const next = prev + delta * 0.5;
      if (next < 0.5) return 0.5;
      if (next > 3) return 3;
      return next;
    });
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <section 
      id="recipe-card"
      aria-label={`Recipe: ${recipe.title}`}
      className="my-12 rounded-2xl border border-stone-200 bg-white p-6 md:p-10 shadow-xs print:m-0 print:border-none print:p-0 print:shadow-none"
    >
      {/* Recipe Header */}
      <div className="border-b border-stone-200 pb-6 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <span className="text-xs font-semibold tracking-wider text-[#C0392B] uppercase">
            {recipe.cuisine} · {recipe.category}
          </span>
          <button
            onClick={handlePrint}
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer print:hidden"
          >
            <Printer className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Print Recipe</span>
          </button>
        </div>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-stone-900 leading-tight">
          {recipe.title.split(':')[0]}
        </h2>
        <p className="mt-3 text-stone-600 text-sm md:text-base leading-relaxed">
          {recipe.summary}
        </p>

        {/* Timers & Servings Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-stone-100">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-stone-400 shrink-0" aria-hidden="true" />
            <div>
              <p className="text-xs text-stone-500 uppercase tracking-wide">Prep Time</p>
              <p className="text-sm md:text-base font-semibold text-stone-900 font-mono tabular-nums">
                {recipe.prepTimeMinutes} mins
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ChefHat className="w-5 h-5 text-stone-400 shrink-0" aria-hidden="true" />
            <div>
              <p className="text-xs text-stone-500 uppercase tracking-wide">Cook Time</p>
              <p className="text-sm md:text-base font-semibold text-stone-900 font-mono tabular-nums">
                {recipe.cookTimeMinutes} mins
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Utensils className="w-5 h-5 text-stone-400 shrink-0" aria-hidden="true" />
            <div>
              <p className="text-xs text-stone-500 uppercase tracking-wide">Total Time</p>
              <p className="text-sm md:text-base font-semibold text-stone-900 font-mono tabular-nums">
                {recipe.totalTimeMinutes} mins
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-stone-400 shrink-0" aria-hidden="true" />
            <div>
              <p className="text-xs text-stone-500 uppercase tracking-wide">Servings</p>
              <p className="text-sm md:text-base font-semibold text-stone-900 font-mono tabular-nums">
                {currentServings}
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Serving Adjuster */}
        <div className="flex items-center justify-between mt-4 p-3 rounded-xl bg-stone-50 border border-stone-100 print:hidden">
          <span className="text-xs text-stone-600 font-medium">
            Scale portions for your table:
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => adjustServings(-1)}
              disabled={servingMultiplier <= 0.5}
              aria-label="Decrease servings"
              className="p-1.5 rounded-md bg-white border border-stone-200 text-stone-700 hover:bg-stone-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="text-xs font-semibold text-stone-800 min-w-16 text-center font-mono tabular-nums">
              {currentServings} servings ({servingMultiplier}x)
            </span>
            <button
              onClick={() => adjustServings(1)}
              disabled={servingMultiplier >= 3}
              aria-label="Increase servings"
              className="p-1.5 rounded-md bg-white border border-stone-200 text-stone-700 hover:bg-stone-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Ingredients & Instructions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Ingredients Column */}
        <div className="lg:col-span-5">
          <h3 className="text-xl font-serif font-bold text-stone-900 mb-4 pb-2 border-b border-stone-100 flex items-center justify-between">
            <span>Ingredients</span>
            <span className="text-xs font-sans font-normal text-stone-500 print:hidden">
              Tap to check off
            </span>
          </h3>

          <ul className="space-y-2.5">
            {recipe.ingredients.map((ing, idx) => {
              const isChecked = !!checkedIngredients[idx];
              return (
                <li
                  key={idx}
                  onClick={() => toggleIngredient(idx)}
                  className={`group flex items-start gap-3 p-2.5 rounded-lg border transition-colors cursor-pointer select-none ${
                    isChecked
                      ? 'bg-stone-50 border-stone-200 text-stone-400'
                      : 'bg-white border-transparent hover:border-stone-200 text-stone-800'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 transition-colors ${
                      isChecked
                        ? 'bg-[#C0392B] text-white'
                        : 'border border-stone-300 group-hover:border-stone-400 bg-white'
                    }`}
                  >
                    {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <div className="text-sm leading-snug">
                    <span className={`font-semibold ${isChecked ? 'line-through text-stone-400' : 'text-stone-900'}`}>
                      {ing.quantity}
                    </span>{' '}
                    <span className={isChecked ? 'line-through text-stone-400' : 'text-stone-800'}>
                      {ing.item}
                    </span>
                    {ing.notes && (
                      <span className="block text-xs text-stone-500 italic mt-0.5">
                        {ing.notes}
                      </span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Variance Disclaimer Notice */}
          <div className="mt-6 p-4 rounded-xl bg-amber-50/70 border border-amber-200/60 text-xs text-amber-900 leading-relaxed flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <strong className="font-semibold block mb-0.5">Cooking Variance Notice</strong>
              <p>{recipe.cookingVarianceNote}</p>
            </div>
          </div>
        </div>

        {/* Step-by-Step Instructions Column */}
        <div className="lg:col-span-7">
          <h3 className="text-xl font-serif font-bold text-stone-900 mb-4 pb-2 border-b border-stone-100">
            Method & Step-by-Step Instructions
          </h3>

          <ol className="space-y-6">
            {recipe.instructions.map((step) => (
              <li key={step.stepNumber} className="relative pl-9">
                <span className="absolute left-0 top-0.5 flex items-center justify-center w-6 h-6 rounded-full bg-stone-900 text-white font-mono text-xs font-semibold">
                  {step.stepNumber}
                </span>
                <h4 className="text-base font-serif font-bold text-stone-900 mb-1.5">
                  {step.title}
                </h4>
                <p className="text-sm md:text-base text-stone-700 leading-relaxed">
                  {step.instruction}
                </p>
                {step.tip && (
                  <div className="mt-2.5 p-3 rounded-lg bg-stone-50 border border-stone-200/70 text-xs text-stone-600 leading-relaxed">
                    <strong className="text-[#C0392B] font-semibold">Chef Tip: </strong>
                    {step.tip}
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
