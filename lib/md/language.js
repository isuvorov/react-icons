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

var MdLanguage = function (_React$Component) {
    _inherits(MdLanguage, _React$Component);

    function MdLanguage() {
        _classCallCheck(this, MdLanguage);

        return _possibleConstructorReturn(this, (MdLanguage.__proto__ || Object.getPrototypeOf(MdLanguage)).apply(this, arguments));
    }

    _createClass(MdLanguage, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.3 23.4h5.6c0.2-1.1 0.5-2.2 0.5-3.4s-0.3-2.3-0.5-3.4h-5.6c0.1 1.1 0.2 2.2 0.2 3.4s-0.1 2.3-0.2 3.4z m-3 9.2c3-1 5.7-3.2 7.3-6h-5c-0.5 2.2-1.3 4.1-2.3 6z m-0.4-9.2c0.2-1.1 0.2-2.2 0.2-3.4s0-2.3-0.2-3.4h-7.8c-0.2 1.1-0.2 2.2-0.2 3.4s0 2.3 0.2 3.4h7.8z m-3.9 9.9c1.4-2 2.5-4.2 3.2-6.7h-6.4c0.7 2.5 1.8 4.7 3.2 6.7z m-6.6-19.9c0.5-2.2 1.3-4.1 2.3-6-3 1-5.7 3.2-7.3 6h5z m-5 13.2c1.6 2.8 4.3 5 7.3 6-1-1.9-1.8-3.9-2.3-6h-5z m-1.3-3.2h5.6c-0.1-1.1-0.2-2.2-0.2-3.4s0.1-2.3 0.2-3.4h-5.6c-0.2 1.1-0.5 2.2-0.5 3.4s0.3 2.3 0.5 3.4z m12.9-16.7c-1.4 2.1-2.5 4.2-3.2 6.7h6.4c-0.7-2.5-1.8-4.6-3.2-6.7z m11.6 6.7c-1.6-2.8-4.3-5-7.3-6 1 1.9 1.8 3.9 2.3 6h5z m-11.6-10c9.2 0 16.6 7.4 16.6 16.6s-7.4 16.6-16.6 16.6-16.6-7.4-16.6-16.6 7.4-16.6 16.6-16.6z' })
                )
            );
        }
    }]);

    return MdLanguage;
}(React.Component);

exports.default = MdLanguage;
module.exports = exports['default'];