// ==================== 词汇库 ====================
const VOCABULARY = {
    '超市': {
        core: ['shōu yín yuán 收银员', 'huò jià 货架', 'tuī chē 推车', 'shōu yín tái 收银台'],
        items: ['píng guǒ 苹果', 'niú nǎi 牛奶', 'miàn bāo 面包', 'dàn 蛋', 'shuǐ guǒ 水果', 'shū cài 蔬菜', 'guǒ zhī 果汁', 'qiāo kē lì 巧克力'],
        environment: ['chū kǒu 出口', 'rù kǒu 入口', 'dēng 灯', 'qiáng 墙', 'bō li 玻璃', 'mén 门']
    },
    '医院': {
        core: ['yī shēng 医生', 'hù shi 护士', 'tīng zhěn qì 听诊器', 'zhù suò 注射器', 'chuáng 床'],
        items: ['yào 药', 'yào fāng 药方', 'wén jùn ke 温度计', 'miàn zhēn 面真', 'shǒu shù dāo 手术刀', 'yào xiàng 药箱'],
        environment: ['guà hào 挂号', 'chuāng kǒu 窗口', 'yī yuàn 医院', 'bìng 房', 'zǒu láng 走廊', 'dēng 灯']
    },
    '公园': {
        core: ['shù 树', 'huā 花', 'cǎo dì 草地', 'lù 路', 'cháng yǐ 长椅'],
        items: ['huá tǐ 滑梯', 'qiū qiān 秋千', 'qiáo 桥', 'niǎo 鸟', 'hú dié 蝴蝶', 'qiú 球', 'fēng zheng 风筝'],
        environment: ['tài yáng 太阳', 'yún 云', 'lán tiān 蓝天', 'hé 河', 'shān 山', 'shuǐ 水']
    },
    '学校': {
        core: ['lǎo shī 老师', 'hēi bǎn 黑板', 'shū zhuō 书桌', 'shū bāo 书包', 'jiào shì 教室'],
        items: ['qiān bǐ 铅笔', 'xiàng pí 橡皮', 'kè běn 课本', 'cè dàn 尺子', 'bǐ 笔', 'zuò yè běn 作业本'],
        environment: ['xiào mén 校门', 'cāo chāng 操场', 'tái qí 台旗', 'chuāng 窗', 'tài yáng 太阳', 'qí 旗']
    },
    '动物园': {
        core: ['lǎo hǔ 老虎', 'shī zi 狮子', 'xiàng 象', 'cháng jǐng lù 长颈鹿', 'hóu zi 猴子'],
        items: ['niú 牛', 'mǎ 马', 'zhū 猪', 'gǒu 狗', 'māo 猫', 'tù zi 兔子', 'niǎo 鸟'],
        environment: ['lóng zi 笼子', 'shuǐ 水', 'shù 树', 'cǎo 草', 'shí tou 石头', 'qiáng 墙']
    },
    '图书馆': {
        core: ['shū 书', 'shū jià 书架', 'tú shū guǎn 图书馆', 'zhuō zi 桌子', 'yǐ zi 椅子'],
        items: ['bǐ 笔', 'běn 子 本', 'zhǐ 纸', 'bào 纸报', 'cí diǎn 词典', 'mán huà shū 漫画书'],
        environment: ['dēng 灯', 'chuāng 窗', 'mén 门', 'qiáng 墙', 'bō li 玻璃', 'wén zì 文字']
    },
    '地铁站': {
        core: ['huǒ chē 火车', 'zhàn 站', 'tiě 路 铁', 'gui 柜', 'mén 门'],
        items: ['piào 票', 'kǎ 卡', 'zì dòng xiàojiīqi 自动售票机', 'ān quán xiànlù 安全线路', 'shǒu fú 手扶', 'diàn tī 电梯'],
        environment: ['dēng 灯', 'qiáng 墙', 'bù 步', 'lù 路', 'pái 牌', 'xìn hào 信号']
    },
    '餐厅': {
        core: ['chuī fú 厨师', 'fú wù yuán 服务员', 'zhuō zi 桌子', 'yǐ zi 椅子', 'cān tīng 餐厅'],
        items: ['wǎn 碗', 'kuài zi 筷子', 'pán zi 盘子', 'dāo dao 刀', 'chā 叉', 'bei zi 杯子', 'cān jīn 餐巾'],
        environment: ['mén 门', 'chuāng 窗', 'dēng 灯', 'qiáng 墙', 'huā 花', 'huà 画']
    }
};

// 通用词汇（用于自定义主题）
const DEFAULT_VOCABULARY = {
    core: ['rén 人', 'dōng xi 东西', 'wù tǐ 物体', 'zhǔ tǐ 主体', 'bèi jǐng 背景'],
    items: ['xiǎo dōng xi 小东西', 'gōng jù 工具', 'wù pǐn 物品', 'qì tì 器具'],
    environment: ['dēng 灯', 'qiáng 墙', 'mén 门', 'chuāng 窗', 'lù 路', 'shù 树']
};

// ==================== API 配置 ====================
const API_CONFIG = {
    createTaskUrl: 'https://api.kie.ai/api/v1/jobs/createTask',
    queryTaskUrl: 'https://api.kie.ai/api/v1/jobs/recordInfo'
};

// ==================== DOM 元素 ====================
let elements = {};

// ==================== 初始化 ====================
document.addEventListener('DOMContentLoaded', () => {
    initElements();
    initEventListeners();
    loadSavedApiKey();
});

function initElements() {
    elements = {
        apiKey: document.getElementById('apiKey'),
        toggleApiKey: document.getElementById('toggleApiKey'),
        theme: document.getElementById('theme'),
        customTheme: document.getElementById('customTheme'),
        title: document.getElementById('title'),
        imageRatio: document.getElementById('imageRatio'),
        generateBtn: document.getElementById('generateBtn'),
        statusSection: document.getElementById('statusSection'),
        resultSection: document.getElementById('resultSection'),
        errorSection: document.getElementById('errorSection'),
        resultImage: document.getElementById('resultImage'),
        errorMessage: document.getElementById('errorMessage'),
        downloadBtn: document.getElementById('downloadBtn'),
        regenerateBtn: document.getElementById('regenerateBtn'),
        retryBtn: document.getElementById('retryBtn')
    };
}

function initEventListeners() {
    // API Key 显示/隐藏
    elements.toggleApiKey.addEventListener('click', () => {
        if (elements.apiKey.type === 'password') {
            elements.apiKey.type = 'text';
            elements.toggleApiKey.textContent = '隐藏';
        } else {
            elements.apiKey.type = 'password';
            elements.toggleApiKey.textContent = '显示';
        }
    });

    // API Key 保存
    elements.apiKey.addEventListener('change', () => {
        const apiKey = elements.apiKey.value.trim();
        if (apiKey) {
            localStorage.setItem('nano_banana_api_key', apiKey);
        }
    });

    // 主题选择
    elements.theme.addEventListener('change', () => {
        if (elements.theme.value === 'custom') {
            elements.customTheme.style.display = 'block';
            elements.customTheme.focus();
        } else {
            elements.customTheme.style.display = 'none';
        }
    });

    // 生成按钮
    elements.generateBtn.addEventListener('click', handleGenerate);

    // 重新生成按钮
    elements.regenerateBtn.addEventListener('click', () => {
        elements.resultSection.style.display = 'none';
        handleGenerate();
    });

    // 重试按钮
    elements.retryBtn.addEventListener('click', () => {
        elements.errorSection.style.display = 'none';
        handleGenerate();
    });

    // 下载按钮
    elements.downloadBtn.addEventListener('click', handleDownload);
}

function loadSavedApiKey() {
    const savedKey = localStorage.getItem('nano_banana_api_key');
    if (savedKey) {
        elements.apiKey.value = savedKey;
    }
}

// ==================== 生成处理 ====================
async function handleGenerate() {
    const apiKey = elements.apiKey.value.trim();
    const theme = elements.theme.value === 'custom' ? elements.customTheme.value.trim() : elements.theme.value;
    const title = elements.title.value.trim();
    const imageRatio = elements.imageRatio.value;

    // 验证输入
    if (!apiKey) {
        showError('请输入 API Key');
        return;
    }
    if (!theme) {
        showError('请选择或输入主题');
        return;
    }
    if (!title) {
        showError('请输入小报标题');
        return;
    }

    // 显示加载状态
    showStatus();
    setGenerateButtonLoading(true);

    try {
        // 生成提示词
        const prompt = generatePrompt(theme, title);

        // 创建任务
        const taskId = await createTask(apiKey, prompt, imageRatio);

        // 轮询等待结果
        const imageUrl = await pollTaskStatus(apiKey, taskId);

        // 显示结果
        showResult(imageUrl);
    } catch (error) {
        showError(error.message);
    } finally {
        setGenerateButtonLoading(false);
    }
}

// ==================== 提示词生成 ====================
function generatePrompt(theme, title) {
    const vocab = VOCABULARY[theme] || DEFAULT_VOCABULARY;

    return `请生成一张儿童识字小报《${theme}》，竖版 A4，学习小报版式，适合 5–9 岁孩子 认字与看图识物。

# 一、小报标题区（顶部）

**顶部居中大标题**：《${title}》
* **风格**：十字小报 / 儿童学习报感
* **文本要求**：大字、醒目、卡通手写体、彩色描边
* **装饰**：周围添加与 ${theme} 相关的贴纸风装饰，颜色鲜艳

# 二、小报主体（中间主画面）

画面中心是一幅 **卡通插画风的「${theme}」场景**：
* **整体气氛**：明亮、温暖、积极
* **构图**：物体边界清晰，方便对应文字，不要过于拥挤。

**场景分区与核心内容**
1.  **核心区域 A（主要对象）**：表现 ${theme} 的核心活动。
2.  **核心区域 B（配套设施）**：展示相关的工具或物品。
3.  **核心区域 C（环境背景）**：体现环境特征（如墙面、指示牌等）。

**主题人物**
* **角色**：1 位可爱卡通人物（职业/身份：与 ${theme} 匹配）。
* **动作**：正在进行与场景相关的自然互动。

# 三、必画物体与识字清单（Generated Content）

**请务必在画面中清晰绘制以下物体，并为其预留贴标签的位置：**

**1. 核心角色与设施：**
${vocab.core.map(item => `* ${item}`).join('\n')}

**2. 常见物品/工具：**
${vocab.items.map(item => `* ${item}`).join('\n')}

**3. 环境与装饰：**
${vocab.environment.map(item => `* ${item}`).join('\n')}

*(注意：画面中的物体数量不限于此，但以上列表必须作为重点描绘对象)*

# 四、识字标注规则

对上述清单中的物体，贴上中文识字标签：
* **格式**：两行制（第一行拼音带声调，第二行简体汉字）。
* **样式**：彩色小贴纸风格，白底黑字或深色字，清晰可读。
* **排版**：标签靠近对应的物体，不遮挡主体。

# 五、画风参数
* **风格**：儿童绘本风 + 识字小报风
* **色彩**：高饱和、明快、温暖 (High Saturation, Warm Tone)
* **质量**：8k resolution, high detail, vector illustration style, clean lines.`;
}

// ==================== API 调用 ====================
async function createTask(apiKey, prompt, imageRatio) {
    const response = await fetch(API_CONFIG.createTaskUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: 'google/nano-banana',
            input: {
                prompt: prompt,
                output_format: 'png',
                image_size: imageRatio
            }
        })
    });

    const data = await response.json();

    if (data.code !== 200) {
        throw new Error(`创建任务失败: ${data.msg || '未知错误'}`);
    }

    return data.data.taskId;
}

async function pollTaskStatus(apiKey, taskId) {
    const maxAttempts = 60; // 最多轮询 60 次（约 1 分钟）
    const interval = 2000; // 每 2 秒轮询一次

    for (let i = 0; i < maxAttempts; i++) {
        const response = await fetch(`${API_CONFIG.queryTaskUrl}?taskId=${taskId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });

        const data = await response.json();

        if (data.code !== 200) {
            throw new Error(`查询任务失败: ${data.msg || '未知错误'}`);
        }

        const taskData = data.data;

        if (taskData.state === 'success') {
            const resultJson = JSON.parse(taskData.resultJson);
            if (resultJson.resultUrls && resultJson.resultUrls.length > 0) {
                return resultJson.resultUrls[0];
            }
            throw new Error('生成成功，但未获取到图片 URL');
        }

        if (taskData.state === 'fail') {
            throw new Error(`生成失败: ${taskData.failMsg || '未知错误'}`);
        }

        // 继续等待
        await sleep(interval);
    }

    throw new Error('生成超时，请稍后重试');
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ==================== UI 控制 ====================
function showStatus() {
    elements.statusSection.style.display = 'block';
    elements.resultSection.style.display = 'none';
    elements.errorSection.style.display = 'none';
}

function showResult(imageUrl) {
    elements.statusSection.style.display = 'none';
    elements.resultSection.style.display = 'block';
    elements.errorSection.style.display = 'none';
    elements.resultImage.src = imageUrl;
}

function showError(message) {
    elements.statusSection.style.display = 'none';
    elements.resultSection.style.display = 'none';
    elements.errorSection.style.display = 'block';
    elements.errorMessage.textContent = message;
}

function setGenerateButtonLoading(loading) {
    elements.generateBtn.disabled = loading;
    const btnText = elements.generateBtn.querySelector('.btn-text');
    const btnLoading = elements.generateBtn.querySelector('.btn-loading');

    if (loading) {
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline';
    } else {
        btnText.style.display = 'inline';
        btnLoading.style.display = 'none';
    }
}

async function handleDownload() {
    const imageUrl = elements.resultImage.src;
    if (!imageUrl) return;

    try {
        // 下载图片
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `识字小报_${elements.title.value.trim()}_${Date.now()}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error('下载失败:', error);
        // 如果 fetch 失败，尝试直接打开
        window.open(imageUrl, '_blank');
    }
}
