import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { motion } from 'motion/react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      aria-label="Breadcrumb"
      className="bg-white border-b border-gray-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol 
          className="flex items-center gap-2 text-sm flex-wrap"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          <li
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <Link
              to="/"
              className="flex items-center gap-1 text-[#666666] hover:text-[#D4AF37] transition-colors"
              itemProp="item"
            >
              <Home className="w-4 h-4" />
              <span itemProp="name">Strona główna</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          
          {items.map((item, index) => (
            <li
              key={index}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="flex items-center gap-2"
            >
              <ChevronRight className="w-4 h-4 text-gray-400" />
              {item.path ? (
                <Link
                  to={item.path}
                  className="text-[#666666] hover:text-[#D4AF37] transition-colors"
                  itemProp="item"
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
              ) : (
                <span className="text-[#D4AF37]" itemProp="name">
                  {item.label}
                </span>
              )}
              <meta itemProp="position" content={String(index + 2)} />
            </li>
          ))}
        </ol>
      </div>
    </motion.nav>
  );
}
