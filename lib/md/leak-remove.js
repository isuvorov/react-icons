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

var MdLeakRemove = function (_React$Component) {
    _inherits(MdLeakRemove, _React$Component);

    function MdLeakRemove() {
        _classCallCheck(this, MdLeakRemove);

        return _possibleConstructorReturn(this, (MdLeakRemove.__proto__ || Object.getPrototypeOf(MdLeakRemove)).apply(this, arguments));
    }

    _createClass(MdLeakRemove, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25.6 19.3c2.8-1.6 6-2.7 9.4-2.7v3.4c-2.5 0-4.8 0.6-7 1.7z m7.6 7.6l-2.7-2.7c1.4-0.5 2.9-0.8 4.5-0.8v3.2c-0.6 0-1.2 0.1-1.8 0.3z m-9.8-21.9c0 3.4-1.1 6.6-2.7 9.4l-2.4-2.4c1.1-2.2 1.7-4.5 1.7-7h3.4z m-18.4 2.1l2.1-2.1 27.9 27.9-2.1 2.1-4.8-4.8c-0.9 1.4-1.5 3-1.5 4.8h-3.2c0-2.7 0.9-5.2 2.4-7.1l-2.4-2.4c-2.1 2.6-3.4 5.9-3.4 9.5h-3.4c0-4.5 1.7-8.7 4.4-11.9l-4.1-4.1c-3.2 2.7-7.4 4.4-11.9 4.4v-3.4c3.6 0 6.9-1.2 9.5-3.4l-2.4-2.4c-1.9 1.5-4.4 2.4-7.1 2.4v-3.2c1.8 0 3.4-0.6 4.8-1.5z m11.6-2.1c0 1.6-0.3 3.1-0.8 4.5l-2.7-2.7c0.2-0.5 0.3-1.2 0.3-1.8h3.2z' })
                )
            );
        }
    }]);

    return MdLeakRemove;
}(React.Component);

exports.default = MdLeakRemove;
module.exports = exports['default'];