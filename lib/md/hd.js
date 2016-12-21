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

var MdHd = function (_React$Component) {
    _inherits(MdHd, _React$Component);

    function MdHd() {
        _classCallCheck(this, MdHd);

        return _possibleConstructorReturn(this, (MdHd.__proto__ || Object.getPrototypeOf(MdHd)).apply(this, arguments));
    }

    _createClass(MdHd, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm24.1 22.5v-5h3.4v5h-3.4z m-2.5-7.5v10h6.8c0.9 0 1.6-0.7 1.6-1.6v-6.8c0-0.9-0.7-1.6-1.6-1.6h-6.8z m-3.2 10v-10h-2.5v4.1h-3.4v-4.1h-2.5v10h2.5v-3.4h3.4v3.4h2.5z m13.2-20c1.8 0 3.4 1.6 3.4 3.4v23.2c0 1.8-1.6 3.4-3.4 3.4h-23.2c-1.9 0-3.4-1.6-3.4-3.4v-23.2c0-1.8 1.5-3.4 3.4-3.4h23.2z' })
                )
            );
        }
    }]);

    return MdHd;
}(React.Component);

exports.default = MdHd;
module.exports = exports['default'];