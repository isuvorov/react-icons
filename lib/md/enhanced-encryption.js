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

var MdEnhancedEncryption = function (_React$Component) {
    _inherits(MdEnhancedEncryption, _React$Component);

    function MdEnhancedEncryption() {
        _classCallCheck(this, MdEnhancedEncryption);

        return _possibleConstructorReturn(this, (MdEnhancedEncryption.__proto__ || Object.getPrototypeOf(MdEnhancedEncryption)).apply(this, arguments));
    }

    _createClass(MdEnhancedEncryption, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.6 26.6v-3.2h-5v-5h-3.2v5h-5v3.2h5v5h3.2v-5h5z m-11.8-16.6v3.4h10.4v-3.4c0-2.8-2.4-5.2-5.2-5.2s-5.2 2.4-5.2 5.2z m15.2 3.4c1.8 0 3.4 1.4 3.4 3.2v16.8c0 1.8-1.6 3.2-3.4 3.2h-20c-1.8 0-3.4-1.4-3.4-3.2v-16.8c0-1.8 1.6-3.2 3.4-3.2h1.6v-3.4c0-4.6 3.8-8.4 8.4-8.4s8.4 3.8 8.4 8.4v3.4h1.6z' })
                )
            );
        }
    }]);

    return MdEnhancedEncryption;
}(React.Component);

exports.default = MdEnhancedEncryption;
module.exports = exports['default'];