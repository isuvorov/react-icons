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

var MdStrikethroughS = function (_React$Component) {
    _inherits(MdStrikethroughS, _React$Component);

    function MdStrikethroughS() {
        _classCallCheck(this, MdStrikethroughS);

        return _possibleConstructorReturn(this, (MdStrikethroughS.__proto__ || Object.getPrototypeOf(MdStrikethroughS)).apply(this, arguments));
    }

    _createClass(MdStrikethroughS, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm15.6 21.9c0 3 1.9 4.2 4.9 4.2 2 0 3.8-0.8 3.8-2.8 0-1.9-1-2.3-2.3-3-0.3-0.1-0.7-0.2-1-0.3h-16v-3.4h30v3.4h-6.5c0.1 0.2 0.3 0.4 0.3 0.5 0.3 0.8 0.6 1.8 0.6 2.8 0 3.6-2.4 5.4-5.3 6.2-1.1 0.3-2.2 0.5-3.6 0.5-0.7 0-1.6-0.1-2.4-0.2-1.7-0.4-3.1-0.9-4.3-1.8-1.8-1.3-3.1-3.1-3.1-6.1h4.9z m8.7-9.4c0-2.4-1.5-3.5-4-3.5-1.8 0-3.1 0.6-3.7 1.7-0.1 0.3-0.2 0.7-0.2 1.1 0 0.8 0.5 1.5 1.3 2 0.6 0.4 1.2 0.8 2.3 1.2h-7.7c0-0.2-0.2-0.2-0.3-0.4-0.4-0.8-0.6-1.7-0.6-2.8 0-2.2 1.2-3.9 2.5-4.9 1.6-1.1 3.7-1.9 6.5-1.9 2.7 0 5 0.8 6.5 2.1 1.3 1.2 2.4 3 2.4 5.4h-5z' })
                )
            );
        }
    }]);

    return MdStrikethroughS;
}(React.Component);

exports.default = MdStrikethroughS;
module.exports = exports['default'];