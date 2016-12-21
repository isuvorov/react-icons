'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var GoCloudUpload = function (_React$Component) {
    _inherits(GoCloudUpload, _React$Component);

    function GoCloudUpload() {
        _classCallCheck(this, GoCloudUpload);

        return _possibleConstructorReturn(this, (GoCloudUpload.__proto__ || Object.getPrototypeOf(GoCloudUpload)).apply(this, arguments));
    }

    _createClass(GoCloudUpload, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 15l-7.5 7.5h5v12.5h5v-12.5h5l-7.5-7.5z m12.5-2.5c-0.3 0-0.7 0.1-1 0.1-1.9-4.5-6.3-7.6-11.5-7.6-5.2 0-9.6 3.1-11.5 7.6-0.3 0-0.7-0.1-1-0.1-4.1 0-7.5 3.4-7.5 7.5 0 4.1 3.4 7.5 7.5 7.5 0.8 0 1.6-0.2 2.3-0.4 1.3 1.5 3.1 2.5 5.2 2.8v-2.6c-1.9-0.4-3.6-1.7-4.4-3.4-0.8 0.7-1.9 1.1-3.1 1.1-2.8 0-5-2.2-5-5 0-2.8 2.2-5 5-5 1 0 1.9 0.3 2.7 0.8 0.8-4.7 4.9-8.3 9.8-8.3 4.9 0 9 3.6 9.8 8.3 0.8-0.5 1.7-0.8 2.7-0.8 2.8 0 5 2.2 5 5 0 2.8-2.2 5-5 5-0.4 0-0.8-0.1-1.2-0.1-1.1 1.6-2.9 2.6-5 2.6-0.5 0-0.9-0.1-1.3-0.2v2.6c0.4 0 0.8 0.1 1.3 0.1 2.3 0 4.5-1 6.1-2.5 0 0 0.1 0 0.1 0 4.1 0 7.5-3.4 7.5-7.5 0-4.1-3.4-7.5-7.5-7.5z' })
                )
            );
        }
    }]);

    return GoCloudUpload;
}(React.Component);

exports.default = GoCloudUpload;
module.exports = exports['default'];