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

var MdPhonelinkErase = function (_React$Component) {
    _inherits(MdPhonelinkErase, _React$Component);

    function MdPhonelinkErase() {
        _classCallCheck(this, MdPhonelinkErase);

        return _possibleConstructorReturn(this, (MdPhonelinkErase.__proto__ || Object.getPrototypeOf(MdPhonelinkErase)).apply(this, arguments));
    }

    _createClass(MdPhonelinkErase, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.6 1.6c1.8 0 3.4 1.6 3.4 3.4v30c0 1.8-1.6 3.4-3.4 3.4h-16.6c-1.8 0-3.4-1.6-3.4-3.4v-5h3.4v3.4h16.6v-26.8h-16.6v3.4h-3.4v-5c0-1.8 1.6-3.4 3.4-3.4h16.6z m-10 12.1l-6.6 6.6 6.6 6.7-1.6 1.7-6.6-6.7-6.8 6.7-1.6-1.7 6.6-6.7-6.6-6.6 1.6-1.7 6.8 6.7 6.6-6.7z' })
                )
            );
        }
    }]);

    return MdPhonelinkErase;
}(React.Component);

exports.default = MdPhonelinkErase;
module.exports = exports['default'];