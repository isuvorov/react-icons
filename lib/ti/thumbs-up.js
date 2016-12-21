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

var TiThumbsUp = function (_React$Component) {
    _inherits(TiThumbsUp, _React$Component);

    function TiThumbsUp() {
        _classCallCheck(this, TiThumbsUp);

        return _possibleConstructorReturn(this, (TiThumbsUp.__proto__ || Object.getPrototypeOf(TiThumbsUp)).apply(this, arguments));
    }

    _createClass(TiThumbsUp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.6 14.5c-0.6-0.3-4.2-0.7-6.5-1 0.4-2.1 0.6-4 0.6-6 0-2.3-1.9-4.2-4.2-4.2s-4.2 1.9-4.2 4.2c0 3.1-1.1 4.6-2.7 6.2-0.9-1.2-2.3-2-3.9-2-2.8 0-5 2.2-5 5v10c0 2.7 2.2 5 5 5 1.2 0 2.4-0.5 3.2-1.3 0.1 0.1 0.2 0.2 0.4 0.3 1.6 1.3 6.1 2.6 9.7 2.6 3.1 0 4.3-0.5 5.4-0.9 0.2-0.1 0.4-0.1 0.6-0.2 1.3-0.5 2.6-2 2.8-3.7l1.2-9.9c0.2-1.7-0.8-3.6-2.4-4.1z m-20.9 13.8c-1 0-1.7-0.7-1.7-1.6v-10c0-1 0.7-1.7 1.7-1.7s1.6 0.7 1.6 1.7v10c0 0.9-0.7 1.6-1.6 1.6z m18.8-0.2c0 0.4-0.4 0.9-0.7 1-0.2 0.1-0.4 0.1-0.6 0.2-0.9 0.4-1.7 0.7-4.2 0.7-3.2 0-6.9-1.3-7.7-1.9-0.3-0.2-0.6-1-0.6-1.4v-8.3c0-0.1 0.1-1.1 1.1-2.2 1.6-1.5 3.9-3.8 3.9-8.7 0-0.5 0.3-0.8 0.8-0.8s0.8 0.3 0.8 0.8c0 2.3-0.2 4.5-0.8 7.2l-0.5 2.3 2.2-0.3c1 0 6.6 0.7 7.3 0.9 0.1 0 0.2 0.3 0.1 0.5l-1.1 10z' })
                )
            );
        }
    }]);

    return TiThumbsUp;
}(React.Component);

exports.default = TiThumbsUp;
module.exports = exports['default'];