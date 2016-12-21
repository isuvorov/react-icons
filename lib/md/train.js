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

var MdTrain = function (_React$Component) {
    _inherits(MdTrain, _React$Component);

    function MdTrain() {
        _classCallCheck(this, MdTrain);

        return _possibleConstructorReturn(this, (MdTrain.__proto__ || Object.getPrototypeOf(MdTrain)).apply(this, arguments));
    }

    _createClass(MdTrain, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.5 28.4c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m-5.9-11.8h8.4v-6.6h-8.4v6.6z m-3.2 0v-6.6h-8.4v6.6h8.4z m-5.9 11.8c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m7.5-25c7.3 0 13.4 0.7 13.4 6.6v15.9c0 3.2-2.7 5.7-5.9 5.7l2.5 2.5v0.9h-3.4l-3.2-3.4h-6.4l-3.3 3.4h-3.7v-0.9l2.5-2.5c-3.2 0-5.9-2.5-5.9-5.7v-15.9c0-5.9 6.8-6.6 13.4-6.6z' })
                )
            );
        }
    }]);

    return MdTrain;
}(React.Component);

exports.default = MdTrain;
module.exports = exports['default'];