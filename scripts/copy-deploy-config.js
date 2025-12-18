import { copyFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rootDir = join(__dirname, '..');
const deployConfigDir = join(rootDir, 'deploy-config');
const distClientDir = join(rootDir, 'dist', 'client');

const configFiles = ['.htaccess', '_redirects', 'web.config'];

console.log('📋 Copiando arquivos de configuração para dist/client...\n');

configFiles.forEach(file => {
  const source = join(deployConfigDir, file);
  const dest = join(distClientDir, file);
  
  if (existsSync(source)) {
    try {
      copyFileSync(source, dest);
      console.log(`✅ ${file} copiado com sucesso`);
    } catch (error) {
      console.error(`❌ Erro ao copiar ${file}:`, error.message);
    }
  } else {
    console.warn(`⚠️  Arquivo ${file} não encontrado em deploy-config/`);
  }
});

console.log('\n✨ Configuração de deploy concluída!');

