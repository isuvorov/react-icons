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

var MdInbox = function (_React$Component) {
    _inherits(MdInbox, _React$Component);

    function MdInbox() {
        _classCallCheck(this, MdInbox);

        return _possibleConstructorReturn(this, (MdInbox.__proto__ || Object.getPrototypeOf(MdInbox)).apply(this, arguments));
    }

    _createClass(MdInbox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.6 25v-16.6h-23.3v16.6h6.7c0 2.7 2.3 5 5 5s5-2.3 5-5h6.6z m0-20c1.8 0 3.4 1.5 3.4 3.4v23.2c0 1.8-1.6 3.4-3.4 3.4h-23.3c-1.9 0-3.3-1.6-3.3-3.4v-23.2c0-1.9 1.4-3.4 3.3-3.4h23.3z' })
                )
            );
        }
    }]);

    return MdInbox;
}(React.Component);

exports.default = MdInbox;
module.exports = exports['default'];