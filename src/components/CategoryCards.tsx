import React from 'react';
import { Category } from '../types';
import { CategoryIcon } from './CategoryIcon';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CategoryCardsProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (slug: string) => void;
}

export const CategoryCards: React.FC<CategoryCardsProps> = ({
  categories,
  selectedCategory,
  onSelectCategory
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Phân loại chuyên sâu</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Danh mục nghề nghiệp
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Chọn nhóm chuyên môn của bạn để khám phá các giải pháp AI được tối ưu riêng biệt
          </p>
        </div>

        {selectedCategory !== 'all' && (
          <button
            onClick={() => onSelectCategory('all')}
            className="self-start md:self-auto text-xs text-indigo-400 hover:text-indigo-300 font-medium px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20"
          >
            ← Hiển thị tất cả danh mục
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.slug;

          return (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.slug)}
              className={`group relative rounded-2xl p-5 cursor-pointer transition-all flex flex-col justify-between border ${
                isSelected
                  ? 'bg-slate-900 border-indigo-500 ring-2 ring-indigo-500/30 shadow-xl shadow-indigo-950/40'
                  : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800 hover:border-slate-700 shadow-md'
              }`}
            >
              {/* Category Header with Gradient Icon & Count */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${cat.colorGradient} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform`}
                  >
                    <CategoryIcon name={cat.iconName} className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-slate-400 bg-slate-800 px-2.5 py-1 rounded-full border border-slate-700/50">
                    {cat.count || 0} tools
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors mb-2">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-4">
                  {cat.description}
                </p>
              </div>

              {/* Popular Task Tags */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cat.popularTasks.slice(0, 3).map((task) => (
                    <span
                      key={task}
                      className="text-[10px] font-medium text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/40"
                    >
                      {task}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs font-semibold text-indigo-400 group-hover:text-indigo-300">
                  <span>Khám phá ngay</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
