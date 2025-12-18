import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rootDir = join(__dirname, '..');
const indexHtmlPath = join(rootDir, 'dist', 'client', 'index.html');

console.log('🔧 Corrigindo caminhos no index.html...\n');

try {
  let content = readFileSync(indexHtmlPath, 'utf-8');
  
  // Substitui caminhos absolutos por relativos
  content = content.replace(/src="\/assets\//g, 'src="./assets/');
  content = content.replace(/href="\/assets\//g, 'href="./assets/');
  
  writeFileSync(indexHtmlPath, content, 'utf-8');
  console.log('✅ Caminhos corrigidos para relativos!');
  console.log('   /assets/ → ./assets/\n');
} catch (error) {
  console.error('❌ Erro ao corrigir caminhos:', error.message);
  process.exit(1);
}

