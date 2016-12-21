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

var GoDiffAdded = function (_React$Component) {
    _inherits(GoDiffAdded, _React$Component);

    function GoDiffAdded() {
        _classCallCheck(this, GoDiffAdded);

        return _possibleConstructorReturn(this, (GoDiffAdded.__proto__ || Object.getPrototypeOf(GoDiffAdded)).apply(this, arguments));
    }

    _createClass(GoDiffAdded, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm22.5 12.5h-5v5h-5v5h5v5h5v-5h5v-5h-5v-5z m12.5-10h-30s-2.5 1.3-2.5 2.5v30s1.3 2.5 2.5 2.5h30s2.5-1.2 2.5-2.5v-30s-1.2-2.5-2.5-2.5z m-2.5 28.8c0 0.6-0.7 1.2-1.2 1.2h-22.5s-1.3-0.5-1.3-1.2v-22.5s0.6-1.3 1.3-1.3h22.5s1.2 0.6 1.2 1.3v22.5z' })
                )
            );
        }
    }]);

    return GoDiffAdded;
}(React.Component);

exports.default = GoDiffAdded;
module.exports = exports['default'];