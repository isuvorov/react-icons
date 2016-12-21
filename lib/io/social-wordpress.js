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

var IoSocialWordpress = function (_React$Component) {
    _inherits(IoSocialWordpress, _React$Component);

    function IoSocialWordpress() {
        _classCallCheck(this, IoSocialWordpress);

        return _possibleConstructorReturn(this, (IoSocialWordpress.__proto__ || Object.getPrototypeOf(IoSocialWordpress)).apply(this, arguments));
    }

    _createClass(IoSocialWordpress, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20.2 21.2l4.2 11.4c0 0.1 0.4 1 0.7 1.5-0.3 0-0.4 0.1-0.6 0.2-0.8 0.2-1.7 0.5-2.5 0.5-0.7 0.1-1.4 0.2-2 0.2-1.3 0-2.7-0.2-3.9-0.5-0.2 0-0.2-0.1-0.4-0.1l2-5.7z m-13.9-7.1c0.5 0 0.6 0 1.2 0l7.3 20c-0.3-0.1-0.4-0.2-0.7-0.3-4.9-2.1-8.5-6.8-9-12.3-0.1-0.5-0.1-1-0.1-1.5 0-2 0.5-4.1 1.3-5.9z m27.3-0.4c0.9 1.8 1.4 4 1.4 6.3 0 0.7-0.1 1.4-0.2 2-0.7 5.1-3.9 9.4-8.3 11.5-0.2 0.1-0.2 0.1-0.4 0.2l1.7-5.1 3.1-8.8c0.7-2 1-3.5 1-4.9v-1.5c-0.1-1.4-0.8-3.4-2.8-3.3h-0.2c-1.3 0-2.3 1.1-2.3 2.3 0 1.1 0.7 2.1 1.4 3.2 0.5 1 1.1 2.1 1.1 3.7 0 1.2-0.3 2.7-1.1 4.4l-1.3 4.5-4.8-14.5c0.8 0 1.5-0.1 1.5-0.1 0.7-0.1 0.6-1.3-0.1-1.2 0 0-2.2 0.3-3.6 0.3-1.3 0-3.5-0.3-3.5-0.3-0.7-0.1-0.8 1.2-0.1 1.2 0 0 0.7 0.1 1.4 0.1l2.1 5.8-3 8.8-4.9-14.6c0.8 0 1.6-0.2 1.6-0.2 0.7-0.1 0.6-1.2-0.1-1.1 0 0-2.2 0.2-3.6 0.2h-2.6c0.3-0.7 0.8-1.3 1.3-2 2.7-3.4 7-5.6 11.7-5.6 1.9 0 3.8 0.4 5.4 1 2.6 1 4.9 2.8 6.6 5.1 0.2 0.2 0.3 0.4 0.4 0.5 0.5 0.7 0.9 1.4 1.2 2.1z' })
                )
            );
        }
    }]);

    return IoSocialWordpress;
}(React.Component);

exports.default = IoSocialWordpress;
module.exports = exports['default'];