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

var MdBorderInner = function (_React$Component) {
    _inherits(MdBorderInner, _React$Component);

    function MdBorderInner() {
        _classCallCheck(this, MdBorderInner);

        return _possibleConstructorReturn(this, (MdBorderInner.__proto__ || Object.getPrototypeOf(MdBorderInner)).apply(this, arguments));
    }

    _createClass(MdBorderInner, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.6 28.4v-3.4h3.4v3.4h-3.4z m0 6.6v-3.4h3.4v3.4h-3.4z m-10-30v13.4h13.4v3.2h-13.4v13.4h-3.2v-13.4h-13.4v-3.2h13.4v-13.4h3.2z m3.4 30v-3.4h3.4v3.4h-3.4z m6.6-30h3.4v3.4h-3.4v-3.4z m0 10v-3.4h3.4v3.4h-3.4z m-3.2-10v3.4h-3.4v-3.4h3.4z m-20 0v3.4h-3.4v-3.4h3.4z m6.6 0v3.4h-3.4v-3.4h3.4z m-10 23.4v-3.4h3.4v3.4h-3.4z m3.4-16.8v3.4h-3.4v-3.4h3.4z m3.2 23.4v-3.4h3.4v3.4h-3.4z m-6.6 0v-3.4h3.4v3.4h-3.4z' })
                )
            );
        }
    }]);

    return MdBorderInner;
}(React.Component);

exports.default = MdBorderInner;
module.exports = exports['default'];