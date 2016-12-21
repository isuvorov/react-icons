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

var IoBackspace = function (_React$Component) {
    _inherits(IoBackspace, _React$Component);

    function IoBackspace() {
        _classCallCheck(this, IoBackspace);

        return _possibleConstructorReturn(this, (IoBackspace.__proto__ || Object.getPrototypeOf(IoBackspace)).apply(this, arguments));
    }

    _createClass(IoBackspace, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm39 7.3c0.7 0.7 1 1.6 1 2.6v20c0 2.1-1.6 3.9-3.6 3.9h-23.3c-1 0-1.9-0.3-2.6-0.8-0.7-0.3-1.3-0.8-1.8-1.5l-0.1-0.1-8.6-11.4 8.6-11.6c1.1-1.4 2.7-2.2 4.5-2.2h23.3c1 0 1.9 0.4 2.6 1.1z m-6.7 18.6l-6-5.9 6-5.9c0.3-0.3 0.3-0.7 0-1l-1.7-1.7c-0.1-0.2-0.3-0.2-0.4-0.2s-0.4 0-0.5 0.2l-6 5.9-5.9-5.9c-0.1-0.2-0.3-0.2-0.5-0.2s-0.3 0-0.4 0.2l-1.7 1.7c-0.3 0.3-0.3 0.7 0 1l6 5.9-6 5.9c-0.1 0.2-0.2 0.4-0.2 0.5s0.1 0.3 0.2 0.5l1.7 1.7c0.1 0.2 0.3 0.2 0.4 0.2s0.4 0 0.5-0.2l5.9-6 6 6c0.1 0.2 0.3 0.2 0.5 0.2s0.3 0 0.4-0.2l1.7-1.7c0.1-0.2 0.2-0.3 0.2-0.5s-0.1-0.3-0.2-0.5z' })
                )
            );
        }
    }]);

    return IoBackspace;
}(React.Component);

exports.default = IoBackspace;
module.exports = exports['default'];