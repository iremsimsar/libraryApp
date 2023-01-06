class GraphError {
    public static formatError(error) {
        return {
            message: error.message,
            code: error?.extensions?.exception?.name || error?.extensions?.code,
            data: error?.extensions?.validationErrors || []
        }
    }
}

export default GraphError;
