const getDockerTemplateSettings = (t) => [
  {
    name: "DOCKER_PRIVILEGED",
    label: t('options.appTemplates.settings.DOCKER_PRIVILEGED.label'),
    default: "false",
    description: t('options.appTemplates.settings.DOCKER_PRIVILEGED.description'),
    category: "docker",
    type: "boolean"
  },
  {
    name: "DOCKER_BIND_MOUNTS",
    label: t('options.appTemplates.settings.DOCKER_BIND_MOUNTS.label'),
    default: "",
    description: t('options.appTemplates.settings.DOCKER_BIND_MOUNTS.description'),
    category: "docker",
    type: "text"
  },
  {
    name: "DOCKER_ENV",
    label: t('options.appTemplates.settings.DOCKER_ENV.label'),
    default: "",
    description: t('options.appTemplates.settings.DOCKER_ENV.description'),
    category: "docker",
    type: "text"
  },
  {
    name: "DOCKER_CAP_ADD",
    label: t('options.appTemplates.settings.DOCKER_CAP_ADD.label'),
    default: "",
    description: t('options.appTemplates.settings.DOCKER_CAP_ADD.description'),
    category: "docker",
    type: "text"
  },
  {
    name: "DOCKER_CAP_DROP",
    label: t('options.appTemplates.settings.DOCKER_CAP_DROP.label'),
    default: "",
    description: t('options.appTemplates.settings.DOCKER_CAP_DROP.description'),
    category: "docker",
    type: "text"
  },
  {
    name: "DOCKER_SECURITY_OPT",
    label: t('options.appTemplates.settings.DOCKER_SECURITY_OPT.label'),
    default: "",
    description: t('options.appTemplates.settings.DOCKER_SECURITY_OPT.description'),
    category: "docker",
    type: "text"
  },
  {
    name: "DOCKER_DEVICES",
    label: t('options.appTemplates.settings.DOCKER_DEVICES.label'),
    default: "",
    description: t('options.appTemplates.settings.DOCKER_DEVICES.description'),
    category: "docker",
    type: "text"
  },
  {
    name: "DOCKER_SHM_SIZE",
    label: t('options.appTemplates.settings.DOCKER_SHM_SIZE.label'),
    default: "",
    description: t('options.appTemplates.settings.DOCKER_SHM_SIZE.description'),
    category: "docker",
    type: "text"
  },
  {
    name: "DOCKER_MEM_LIMIT",
    label: t('options.appTemplates.settings.DOCKER_MEM_LIMIT.label'),
    default: "",
    description: t('options.appTemplates.settings.DOCKER_MEM_LIMIT.description'),
    category: "docker",
    type: "text"
  },
  {
    name: "DOCKER_CPU_SHARES",
    label: t('options.appTemplates.settings.DOCKER_CPU_SHARES.label'),
    default: "",
    description: t('options.appTemplates.settings.DOCKER_CPU_SHARES.description'),
    category: "docker",
    type: "text"
  },
  {
    name: "DOCKER_NANO_CPUS",
    label: t('options.appTemplates.settings.DOCKER_NANO_CPUS.label'),
    default: "",
    description: t('options.appTemplates.settings.DOCKER_NANO_CPUS.description'),
    category: "docker",
    type: "text"
  },
  {
    name: "DOCKER_NETWORK_MODE",
    label: t('options.appTemplates.settings.DOCKER_NETWORK_MODE.label'),
    default: "",
    description: t('options.appTemplates.settings.DOCKER_NETWORK_MODE.description'),
    category: "docker",
    type: "select",
    options: {
      "": t('options.appTemplates.settings.DOCKER_NETWORK_MODE.options.default'),
      "host": t('options.appTemplates.settings.DOCKER_NETWORK_MODE.options.host'),
      "none": t('options.appTemplates.settings.DOCKER_NETWORK_MODE.options.none'),
      "bridge": t('options.appTemplates.settings.DOCKER_NETWORK_MODE.options.bridge')
    }
  },
  {
    name: "DOCKER_IPC_MODE",
    label: t('options.appTemplates.settings.DOCKER_IPC_MODE.label'),
    default: "",
    description: t('options.appTemplates.settings.DOCKER_IPC_MODE.description'),
    category: "docker",
    type: "select",
    options: {
      "": t('options.appTemplates.settings.DOCKER_IPC_MODE.options.default'),
      "host": t('options.appTemplates.settings.DOCKER_IPC_MODE.options.host'),
      "private": t('options.appTemplates.settings.DOCKER_IPC_MODE.options.private'),
      "shareable": t('options.appTemplates.settings.DOCKER_IPC_MODE.options.shareable')
    }
  },
  {
    name: "DOCKER_PID_MODE",
    label: t('options.appTemplates.settings.DOCKER_PID_MODE.label'),
    default: "",
    description: t('options.appTemplates.settings.DOCKER_PID_MODE.description'),
    category: "docker",
    type: "select",
    options: {
      "": t('options.appTemplates.settings.DOCKER_PID_MODE.options.default'),
      "host": t('options.appTemplates.settings.DOCKER_PID_MODE.options.host')
    }
  },
  {
    name: "DOCKER_DNS",
    label: t('options.appTemplates.settings.DOCKER_DNS.label'),
    default: "",
    description: t('options.appTemplates.settings.DOCKER_DNS.description'),
    category: "docker",
    type: "text"
  },
  {
    name: "DOCKER_EXTRA_HOSTS",
    label: t('options.appTemplates.settings.DOCKER_EXTRA_HOSTS.label'),
    default: "",
    description: t('options.appTemplates.settings.DOCKER_EXTRA_HOSTS.description'),
    category: "docker",
    type: "text"
  },
  {
    name: "DOCKER_SYSCTLS",
    label: t('options.appTemplates.settings.DOCKER_SYSCTLS.label'),
    default: "",
    description: t('options.appTemplates.settings.DOCKER_SYSCTLS.description'),
    category: "docker",
    type: "text"
  },
  {
    name: "DOCKER_ULIMITS",
    label: t('options.appTemplates.settings.DOCKER_ULIMITS.label'),
    default: "",
    description: t('options.appTemplates.settings.DOCKER_ULIMITS.description'),
    category: "docker",
    type: "text"
  },
  {
    name: "DOCKER_TMPFS",
    label: t('options.appTemplates.settings.DOCKER_TMPFS.label'),
    default: "",
    description: t('options.appTemplates.settings.DOCKER_TMPFS.description'),
    category: "docker",
    type: "text"
  },
  {
    name: "DOCKER_GROUP_ADD",
    label: t('options.appTemplates.settings.DOCKER_GROUP_ADD.label'),
    default: "",
    description: t('options.appTemplates.settings.DOCKER_GROUP_ADD.description'),
    category: "docker",
    type: "text"
  }
];
