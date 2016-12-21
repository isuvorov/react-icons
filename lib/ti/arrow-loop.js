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

var TiArrowLoop = function (_React$Component) {
    _inherits(TiArrowLoop, _React$Component);

    function TiArrowLoop() {
        _classCallCheck(this, TiArrowLoop);

        return _possibleConstructorReturn(this, (TiArrowLoop.__proto__ || Object.getPrototypeOf(TiArrowLoop)).apply(this, arguments));
    }

    _createClass(TiArrowLoop, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.5 13.3h-3.5l2.2-2.1c0.6-0.7 0.6-1.7 0-2.4s-1.7-0.6-2.4 0l-6.2 6.2 6.2 6.2c0.3 0.3 0.8 0.5 1.2 0.5s0.9-0.2 1.2-0.5c0.6-0.7 0.6-1.7 0-2.4l-2.2-2.1h3.5c2.3 0 4.2 2.2 4.2 5s-2.3 5-5 5h-13.4c-2.7 0-5-2.3-5-5s2.3-5 5-5c1 0 1.7-0.8 1.7-1.7s-0.7-1.7-1.7-1.7c-4.6 0-8.3 3.8-8.3 8.4s3.7 8.3 8.3 8.3h13.4c4.6 0 8.3-3.7 8.3-8.3s-3.4-8.4-7.5-8.4z' })
                )
            );
        }
    }]);

    return TiArrowLoop;
}(React.Component);

exports.default = TiArrowLoop;
module.exports = exports['default'];