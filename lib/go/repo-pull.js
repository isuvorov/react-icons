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

var GoRepoPull = function (_React$Component) {
    _inherits(GoRepoPull, _React$Component);

    function GoRepoPull() {
        _classCallCheck(this, GoRepoPull);

        return _possibleConstructorReturn(this, (GoRepoPull.__proto__ || Object.getPrototypeOf(GoRepoPull)).apply(this, arguments));
    }

    _createClass(GoRepoPull, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm40 12.5l-7.5-7.5v5h-15v5h15v5l7.5-7.5z m-12.5 12.5h-20v-22.5h20v5h2.5v-5s-1.2-2.5-2.5-2.5h-25s-2.5 1.3-2.5 2.5v30s1.3 2.5 2.5 2.5h5v5l3.8-3.7 3.7 3.7v-5h12.5s2.5-1.2 2.5-2.5v-15h-2.5v7.5z m0 6.3c0 0.5-0.6 1.2-1.2 1.2h-11.3v-2.5h-7.5v2.5h-3.7s-1.3-0.6-1.3-1.2v-3.8h25v3.8z m-15-21.3h-2.5v2.5h2.5v-2.5z m0-5h-2.5v2.5h2.5v-2.5z m0 10h-2.5v2.5h2.5v-2.5z m-2.5 7.5h2.5v-2.5h-2.5v2.5z' })
                )
            );
        }
    }]);

    return GoRepoPull;
}(React.Component);

exports.default = GoRepoPull;
module.exports = exports['default'];