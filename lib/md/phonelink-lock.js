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

var MdPhonelinkLock = function (_React$Component) {
    _inherits(MdPhonelinkLock, _React$Component);

    function MdPhonelinkLock() {
        _classCallCheck(this, MdPhonelinkLock);

        return _possibleConstructorReturn(this, (MdPhonelinkLock.__proto__ || Object.getPrototypeOf(MdPhonelinkLock)).apply(this, arguments));
    }

    _createClass(MdPhonelinkLock, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm15.9 18.4v-2.5c0-1.4-1.2-2.2-2.5-2.2s-2.5 0.8-2.5 2.2v2.5h5z m2.1 0c1 0 2 0.9 2 2.1v5.8c0 1-1 2.1-2.2 2.1h-9.1c-1 0-2.1-1.1-2.1-2.2v-5.9c0-1 1.1-1.9 2.1-1.9v-2.5c0-2.4 2.3-4.3 4.7-4.3s4.6 1.9 4.6 4.3v2.5z m13.6-16.8c1.8 0 3.4 1.6 3.4 3.4v30c0 1.8-1.6 3.4-3.4 3.4h-16.6c-1.8 0-3.4-1.6-3.4-3.4v-5h3.4v3.4h16.6v-26.8h-16.6v3.4h-3.4v-5c0-1.8 1.6-3.4 3.4-3.4h16.6z' })
                )
            );
        }
    }]);

    return MdPhonelinkLock;
}(React.Component);

exports.default = MdPhonelinkLock;
module.exports = exports['default'];