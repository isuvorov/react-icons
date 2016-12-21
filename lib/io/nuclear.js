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

var IoNuclear = function (_React$Component) {
    _inherits(IoNuclear, _React$Component);

    function IoNuclear() {
        _classCallCheck(this, IoNuclear);

        return _possibleConstructorReturn(this, (IoNuclear.__proto__ || Object.getPrototypeOf(IoNuclear)).apply(this, arguments));
    }

    _createClass(IoNuclear, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm13.8 21.3c0-2.5 1.2-3.8 3.7-3.8s3.8 1.3 3.8 3.8-1.3 3.7-3.8 3.7-3.7-1.2-3.7-3.7z m0 0c0-2.5 1.2-3.8 3.7-3.8s3.8 1.3 3.8 3.8-1.3 3.7-3.8 3.7-3.7-1.2-3.7-3.7z m21.2 0c0 2.1-0.4 4.1-1.2 6s-1.8 3.7-3.1 5.2-2.8 2.7-4.6 3.8l-6.2-10.7c1.7-0.9 2.6-2.4 2.6-4.3h12.5z m-17.5-5c-0.9 0-1.8 0.2-2.6 0.7l-6.2-10.8c2.7-1.6 5.7-2.4 8.8-2.4s6.1 0.7 8.8 2.3l-6.3 10.9c-0.8-0.5-1.6-0.7-2.5-0.7z m-5 5c0 1.9 0.9 3.4 2.6 4.3l-6.2 10.7c-2.7-1.6-4.8-3.6-6.5-6.3s-2.4-5.5-2.4-8.7h12.5z' })
                )
            );
        }
    }]);

    return IoNuclear;
}(React.Component);

exports.default = IoNuclear;
module.exports = exports['default'];