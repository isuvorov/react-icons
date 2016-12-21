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

var MdRowing = function (_React$Component) {
    _inherits(MdRowing, _React$Component);

    function MdRowing() {
        _classCallCheck(this, MdRowing);

        return _possibleConstructorReturn(this, (MdRowing.__proto__ || Object.getPrototypeOf(MdRowing)).apply(this, arguments));
    }

    _createClass(MdRowing, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 35l-5 5-5-5v-2.5l-11.8-11.8c-0.5 0.1-1.1 0.1-1.6 0.1v-3.6c2.8 0.1 6.1-1.4 7.9-3.4l2.3-2.6c0.6-0.5 1.6-1.2 2.7-1.2h0.1c2 0 3.8 1.7 3.8 3.7v9.7c0 1.4-0.7 2.6-1.6 3.6l-5.9-6v-3.8c-1.1 0.8-2.5 1.7-3.9 2.3l10.5 10.5h2.5z m-10-33.4c1.8 0 3.4 1.6 3.4 3.4s-1.6 3.4-3.4 3.4-3.4-1.6-3.4-3.4 1.6-3.4 3.4-3.4z m-10.9 22.5l4.3 4.3h-3.4l-5.9 5.7-2.5-2.5z' })
                )
            );
        }
    }]);

    return MdRowing;
}(React.Component);

exports.default = MdRowing;
module.exports = exports['default'];