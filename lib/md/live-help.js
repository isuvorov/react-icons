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

var MdLiveHelp = function (_React$Component) {
    _inherits(MdLiveHelp, _React$Component);

    function MdLiveHelp() {
        _classCallCheck(this, MdLiveHelp);

        return _possibleConstructorReturn(this, (MdLiveHelp.__proto__ || Object.getPrototypeOf(MdLiveHelp)).apply(this, arguments));
    }

    _createClass(MdLiveHelp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25.1 17.1c0.9-0.9 1.5-2.3 1.5-3.7 0-3.7-2.9-6.8-6.6-6.8s-6.6 3.1-6.6 6.8h3.2c0-1.8 1.6-3.4 3.4-3.4s3.4 1.6 3.4 3.4c0 0.9-0.4 1.7-1.1 2.3l-2 2.1c-1.2 1.3-1.9 2.9-1.9 4.7v0.9h3.2c0-2.5 0.8-3.6 2-4.8z m-3.5 12.9v-3.4h-3.2v3.4h3.2z m10-26.6c1.8 0 3.4 1.4 3.4 3.2v23.4c0 1.8-1.6 3.4-3.4 3.4h-6.6l-5 5-5-5h-6.6c-1.9 0-3.4-1.6-3.4-3.4v-23.4c0-1.8 1.5-3.2 3.4-3.2h23.2z' })
                )
            );
        }
    }]);

    return MdLiveHelp;
}(React.Component);

exports.default = MdLiveHelp;
module.exports = exports['default'];