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

var MdFormatTextdirectionRToL = function (_React$Component) {
    _inherits(MdFormatTextdirectionRToL, _React$Component);

    function MdFormatTextdirectionRToL() {
        _classCallCheck(this, MdFormatTextdirectionRToL);

        return _possibleConstructorReturn(this, (MdFormatTextdirectionRToL.__proto__ || Object.getPrototypeOf(MdFormatTextdirectionRToL)).apply(this, arguments));
    }

    _createClass(MdFormatTextdirectionRToL, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm13.4 28.4h20v3.2h-20v5l-6.8-6.6 6.8-6.6v5z m3.2-11.8q-2.7 0-4.6-1.9t-2-4.7 1.9-4.7 4.7-1.9h13.4v3.2h-3.4v18.4h-3.2v-18.4h-3.4v18.4h-3.4v-8.4z' })
                )
            );
        }
    }]);

    return MdFormatTextdirectionRToL;
}(React.Component);

exports.default = MdFormatTextdirectionRToL;
module.exports = exports['default'];