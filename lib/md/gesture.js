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

var MdGesture = function (_React$Component) {
    _inherits(MdGesture, _React$Component);

    function MdGesture() {
        _classCallCheck(this, MdGesture);

        return _possibleConstructorReturn(this, (MdGesture.__proto__ || Object.getPrototypeOf(MdGesture)).apply(this, arguments));
    }

    _createClass(MdGesture, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.1 30.9c1.2 0 3.2-1.4 3.6-5.8-3.6 0.9-4.8 3.6-4.8 4.6 0 0.8 0.7 1.2 1.2 1.2z m-15.4-19.4l-2.9-2.8c0.4-0.5 0.7-1 1.4-1.6 0.4-0.4 2.3-2.1 4.5-2.1 1.5 0 4.2 1.2 4.2 4.8 0 2.2-0.8 3.6-2.2 5.4-0.7 1.1-2.5 4.1-3 5.9-0.6 1.8-0.2 3.2 0.5 3.2 0.7 0 1.5-0.9 1.9-1.4 0.4-0.4 2.9-3.3 3.8-4.5 1.3-1.6 4.5-4.7 8.2-4.7 5 0 6.5 4.2 6.8 6.9h4.1v4.2h-4.1c-0.7 7.9-5.1 10.2-7.9 10.2-2.9 0-5.3-2.3-5.3-5.2s2.7-7.8 9-8.9c-0.1-1.4-0.2-3-2.9-3-2.2 0-4.8 3.2-6.8 5.7-1.9 2.3-3.3 4.1-5.1 4.6-3.9 1.2-6.7-2.2-6.7-5.7 0-4.1 4.4-9.8 4.8-10.5 0.5-0.8 1.3-2.2 0.5-2.5-0.6-0.3-1.7 0.8-2.8 2z' })
                )
            );
        }
    }]);

    return MdGesture;
}(React.Component);

exports.default = MdGesture;
module.exports = exports['default'];