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

var MdLocalPlay = function (_React$Component) {
    _inherits(MdLocalPlay, _React$Component);

    function MdLocalPlay() {
        _classCallCheck(this, MdLocalPlay);

        return _possibleConstructorReturn(this, (MdLocalPlay.__proto__ || Object.getPrototypeOf(MdLocalPlay)).apply(this, arguments));
    }

    _createClass(MdLocalPlay, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25.9 28l-1.8-6.8 5.5-4.6-7-0.3-2.6-6.6-2.6 6.6-7.1 0.3 5.6 4.6-1.8 6.8 5.9-3.9z m7.5-8c0 1.8 1.4 3.4 3.2 3.4v6.6c0 1.8-1.4 3.4-3.2 3.4h-26.8c-1.8 0-3.2-1.6-3.2-3.4v-6.6c1.8 0 3.2-1.6 3.2-3.4s-1.4-3.4-3.2-3.4v-6.6c0-1.8 1.4-3.4 3.2-3.4h26.8c1.8 0 3.2 1.6 3.2 3.4v6.6c-1.8 0-3.2 1.6-3.2 3.4z' })
                )
            );
        }
    }]);

    return MdLocalPlay;
}(React.Component);

exports.default = MdLocalPlay;
module.exports = exports['default'];